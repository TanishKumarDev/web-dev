const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F1C40F",
  "#8E44AD",
  "#2ECC71",
  "#3498DB",
  "#FF33A6",
  "#FF8C00",
  "teal",
  "tomato",
  "rebeccapurple",
];

// DOM Elements
const flipBtn = document.getElementById("flipBtn");
const colorCode = document.getElementById("colorCode");

// Event listener
flipBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    const selectedColr = colors[randomIndex];

    document.body.style.backgroundColor = selectedColr;

    colorCode.textContent = selectedColr;
});

colorCode.addEventListener("click" , async () => {
    try{
        await navigator.clipboard.writeText(colorCode.textContent);
    }catch(error){
        console.log("copy failed", err.message);
    }
});