const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const weatherOutput = document.querySelector("#weather");
const GEOCODE_KEY = "1bf76d9f384430868b53aae97e4d645f";

// show loading message while fetching data
function setLoading() {
  weatherOutput.innerHTML = "<p>Loading...</p>";
}

// fetch coordinates from positionstack.com
async function getCoordinates(city) {
  setLoading(true);
  const res = await fetch(
    `https://api.positionstack.com/v1/forward?access_key=${GEOCODE_KEY}&query=${encodeURIComponent(
      city
    )}`
  );

  setLoading(false);

  const data = await res.json();
  if (!data.data || data.data.length === 0) {
    throw new Error("City not found");
  }
  const location = data.data[0];
  // return coordinates and city name
  return {
    lat: location.latitude,
    lon: location.longitude,
    displayName:
      location.name +
      ", " +
      (location.region || "") +
      " " +
      (location.country || ""),
  };
}

// fetch weather data from open-meteo.com
async function fetchWeather(city) {
  try {
    const { lat, lon, displayName } = await getCoordinates(city);
    // save to local storage
    localStorage.setItem("lastCity", city);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.current_weather) {
      throw new Error("Weather data not available");
    }
    const weather = data.current_weather;
    // update output
    weatherOutput.innerHTML = `
      <h2>${displayName}</h2>
      <p>Temp: <strong>${weather.temperature}°C</strong></p>
      <p>Wind: ${weather.windspeed} km/h</p>
      <p>Direction: ${weather.winddirection}°</p>
      <p>Time: ${new Date(weather.time).toLocaleString()}</p>
    `;
    weatherOutput.classList.remove("error");
  } catch (err) {
    showError(err.message || "Something went wrong");
  }
}

// show error message
let errorTimeoutId = null;

function showError(msg) {
  weatherOutput.innerHTML = `<p class="error">${msg}</p>`;
  weatherOutput.classList.add("error");
  if (errorTimeoutId) clearTimeout(errorTimeoutId);
  errorTimeoutId = setTimeout(() => {
    clearError();
  }, 3000);
}

// clear error message
function clearError() {
  if (weatherOutput.classList.contains("error")) {
    weatherOutput.innerHTML = "";
    weatherOutput.classList.remove("error");
  }
  if (errorTimeoutId) {
    clearTimeout(errorTimeoutId);
    errorTimeoutId = null;
  }
}

// handle search button click
function handleSearch() {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
    cityInput.value = "";
  } else {
    showError("Please enter a city name");
  }
}

// load last city from local storage
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    cityInput.value = lastCity;
    fetchWeather(lastCity);
  }
});
searchBtn.addEventListener("click", handleSearch);
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});
cityInput.addEventListener("input", clearError);
