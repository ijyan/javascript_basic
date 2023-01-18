/**
 * Coding Challenge #1
 */

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = '... ';
  arr.forEach((v, i) => {
    str += `${v}ºC in ${i + 1} days ... `;
  });
  return str;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
