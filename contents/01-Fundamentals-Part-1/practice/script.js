/**
 * Coding Challenge #1
 */
// TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;

// TEST DATA 2
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
*/
const BMI = (mass, height) => mass / height ** 2;

const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(`BMIMark: ${BMIMark}
BMIJohn: ${BMIJohn}
markHigherBMI: ${markHigherBMI}`);

/**
 * Coding Challenge #2
 */
if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI(${BMIMark.toFixed(
      1,
    )}) is higher than John's BMI(${BMIJohn.toFixed(1)})`,
  );
} else {
  console.log(
    `John's BMI(${BMIJohn.toFixed(
      1,
    )}) is higher than Mark's BMI(${BMIMark.toFixed(1)})`,
  );
}
