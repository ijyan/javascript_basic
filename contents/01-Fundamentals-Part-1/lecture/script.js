/**
 * Values and Variables
 */
/*
const js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

const firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
// 변수 선언(declaring a varable)
// camelCase
const myFirstJob = 'Programmer';
const myCurrentJob = 'Teacher';

console.log(myFirstJob);
console.log(myCurrentJob);
*/

/**
 * Data Types
 */
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof 'jonas'); // string

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun); // string

let year;
console.log(year);
console.log(typeof year); // undefined

year = 1003;
console.log(typeof year); // number

console.log(typeof null); // object
*/

/**
 * let, const and var
 */
/*
let age = 30;
age = 31;

const birthYear = 2000;
// birthYear = 2000;
 */

/**
 * Basic Operators
 */
/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(`${firstName} ${lastName}`);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
x--; // x = x - 1;
console.log(x); // 99

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // false

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // true
*/

/**
 * Operator Precedence
 */
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x; let y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 */

/**
 * Strings and Template Literals
 */
/*
// type conversion
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
 */

/**
 * Taking Decisions: if / else Statements
 */
/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
 */
