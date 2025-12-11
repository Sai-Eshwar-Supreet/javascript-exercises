const roundTo = (number, precision) => {
  let factor = 10**precision;
  return Math.round(number * factor) / factor;
}

const convertToCelsius = (f)  => roundTo((f - 32) * 5/9, 1);

const convertToFahrenheit = (c) =>  roundTo((c * 9/5) + 32 , 1);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
