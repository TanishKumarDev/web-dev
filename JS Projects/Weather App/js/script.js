const cityInput = document.querySelector('#cityInput');
const searchBtn = document.querySelector('#searchBtn');
const weatherOutput = document.querySelector('#weather');
const GEOCODE_KEY = '1bf76d9f384430868b53aae97e4d645f';

async function getCoordinates(city) {
  const res = await fetch(`http://api.positionstack.com/v1/forward?access_key=${GEOCODE_KEY}&query=${encodeURIComponent(city)}`);
  const data = await res.json();
  if (!data.data || data.data.length === 0) {
    throw new Error('City not found');
  }
  const location = data.data[0];
  return { lat: location.latitude, lon: location.longitude, displayName: location.name + ', ' + (location.region || '') + ' ' + (location.country || '') };
}

async function fetchWeather(city) {
  try {
    const { lat, lon, displayName } = await getCoordinates(city);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const res = await fetch(url);
    const data = await res.json();
    if (!data.current_weather) {
      throw new Error('Weather data not available');
    }
    const weather = data.current_weather;
    weatherOutput.innerHTML = `
      <h2>${displayName}</h2>
      <p>Temp: <strong>${weather.temperature}°C</strong></p>
      <p>Wind: ${weather.windspeed} km/h</p>
      <p>Direction: ${weather.winddirection}°</p>
      <p>Time: ${new Date(weather.time).toLocaleString()}</p>
    `;
    weatherOutput.classList.remove('error');
  } catch (err) {
    showError(err.message || 'Something went wrong');
  }
}

function showError(msg) {
  weatherOutput.innerHTML = `<p class="error">${msg}</p>`;
  weatherOutput.classList.add('error');
}

function handleSearch() {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
    cityInput.value = '';
  } else {
    showError('Please enter a city name');
  }
}

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleSearch();
});

