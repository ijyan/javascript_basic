/// ////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemp = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const current = temps[i];
    if (typeof current !== 'number') continue;

    if (current > max) max = current;
    if (current < min) min = current;
  }
  return max - min;
};

console.log(calcTemp(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcTempNew = (t1, t2) => {
  // merge arrays
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const current = temps[i];
    if (typeof current !== 'number') continue;

    if (current > max) max = current;
    if (current < min) min = current;
  }
  return max - min;
};

const tempNew = calcTempNew([3, 5, 1], [9, 0, 5]);
console.log(tempNew);

/// ////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: prompt('Degrees celsius:'),
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

/// ////////////////////////////////////
// Using a debugger
const calcTempBug = (t1, t2) => {
  // merge arrays
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const current = temps[i];
    if (typeof current !== 'number') continue;

    // debugger;
    if (current > max) max = current;
    if (current < min) min = current;
  }
  return max - min;
};

const tempBug = calcTempBug([3, 5, 1], [9, 4, 5]);
console.log(tempBug);
