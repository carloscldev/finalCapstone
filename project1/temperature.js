// TEMPERATURE METRIC CONVERTER PROGRAM
// This program converts temperature from Celsius, Fahrenheit and Kelvin to Celsius, Fahrenheit or Kelvin

// Define the conversion formula
const celsiusFromFahrenheit = (f) => ((f - 32) * 5) / 9;
const celsiusFromKelvin = (k) => k - 273.15;
const fahrenheitFromCelsius = (c) => (c * 9) / 5 + 32;
const fahrenheitFromKelvin = (k) => (k * 9) / 5 - 459.67;
const kelvinFromCelsius = (c) => +c + 273.15;
const kelvinFromFahrenheit = (f) => ((+f + 459.67) * 5) / 9;

// Ask the user to choose the current metric
let currentMetric = prompt(
  "Choose the current metric:\nC - Celsius \nF - Fahrenheit \nK - Kelvin"
);
// convert the user input to uppercase
currentMetric = currentMetric.toUpperCase();

// Repeat the input if the user enters an invalid metric
while (
  currentMetric !== "C" &&
  currentMetric !== "F" &&
  currentMetric !== "K"
) {
  currentMetric = prompt(
    "Invalid metric. Please choose, C, F or K.\nChoose the current metric:\nC - Celsius \nF - Fahrenheit \nK - Kelvin"
  );
  currentMetric = currentMetric.toUpperCase();
}

// Ask the user to choose the temperature that wants to convert
const currentTemperature = prompt("Enter the temperature you want to convert:");

// Check if the temperature is a number
if (isNaN(currentTemperature)) {
  console.log("Invalid temperature. Please enter a number.");
}

// Ask the user to choose the metric to convert to
let convertToMetric = prompt(
  "Choose the metric to convert to:\nC - Celsius \nF - Fahrenheit \nK - Kelvin"
);
// convert the user input to uppercase
convertToMetric = convertToMetric.toUpperCase();

// Repeat the input if the user enters an invalid metric
while (
  convertToMetric !== "C" &&
  convertToMetric !== "F" &&
  convertToMetric !== "K"
) {
  convertToMetric = prompt(
    "Invalid metric. Please choose, C, F or K.\nChoose the metric to convert to:\nC - Celsius \nF - Fahrenheit \nK - Kelvin"
  );
  convertToMetric = convertToMetric.toUpperCase();
}

// Convert the temperature using the conversion formulas
let convertedTemperature;
if (currentMetric === "C" && convertToMetric === "F") {
  convertedTemperature = fahrenheitFromCelsius(currentTemperature);
  console.log(
    currentTemperature +
      currentMetric +
      " are " +
      convertedTemperature +
      convertToMetric
  );
} else if (currentMetric === "C" && convertToMetric === "K") {
  convertedTemperature = kelvinFromCelsius(currentTemperature);
  console.log(
    currentTemperature +
      currentMetric +
      " are " +
      convertedTemperature +
      convertToMetric
  );
} else if (currentMetric === "F" && convertToMetric === "C") {
  convertedTemperature = celsiusFromFahrenheit(currentTemperature);
  console.log(
    currentTemperature +
      currentMetric +
      " are " +
      convertedTemperature +
      convertToMetric
  );
} else if (currentMetric === "F" && convertToMetric === "K") {
  convertedTemperature = kelvinFromFahrenheit(currentTemperature);
  console.log(
    currentTemperature +
      currentMetric +
      " are " +
      convertedTemperature +
      convertToMetric
  );
} else if (currentMetric === "K" && convertToMetric === "C") {
  convertedTemperature = celsiusFromKelvin(currentTemperature);
  console.log(
    currentTemperature +
      currentMetric +
      " are " +
      convertedTemperature +
      convertToMetric
  );
} else if (currentMetric === "K" && convertToMetric === "F") {
  convertedTemperature = fahrenheitFromKelvin(currentTemperature);
} else {
  console.log(
    currentTemperature +
      currentMetric +
      " are " +
      currentTemperature +
      convertToMetric
  );
}

/* Resources Consulted 
Foundation, M. (no date) While - javascript: MDN, JavaScript | MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while (Accessed: December 7, 2022). 
*/
