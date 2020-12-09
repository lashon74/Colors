// Global selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const currentHexes = document.querySelector(".color h2");
const sliders = document.querySelectorAll('input[type="range"]');
let initialColors;
// Functions

// Color Generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // Add the color to the bg
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    //   Check for contrast
    checkTextContrast(randomColor, hexText);
    /* Initial Colorize slider 
    grabbing each color and looping through it grabbing each slide by its index*/
    const color = chroma(randomColor);
    const sliders = div.querySelectorAll(".slider input");
    const hue = sliders[0];
    const brightness = sliders[1];
    const saturation = sliders[2];

    // colorizeSliders(color, hue, brightness, saturation);
  });
}

function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}
randomColors();
