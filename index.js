
const convertToCelsius = (tempF) => {
  const tempC = (5 / 9) * (tempF - 32);
  return tempC;
}

const describeTemperature = (tempF) => {
  const tempC = convertToCelsius(tempF);
  let desc = undefined;

  if(tempC < 0) {
    desc = "very cold";
  } else if(tempC < 20) {
    desc = "cold";
  } else if(tempC < 30) {
    desc = "warm";
  } else if(tempC < 40) {
    desc = "hot";
  } else {
    desc = "very hot";
  }
  return desc;
}

const userInput = prompt("Please provide a temperature in Fahrenheit: ");
const tempF = Number(userInput);
const tempC = convertToCelsius(tempF);
const desc = describeTemperature(tempF);

alert(`${tempF} degrees Fahrenheit is ${tempC} degrees Celsius. That's ${desc}!`);
