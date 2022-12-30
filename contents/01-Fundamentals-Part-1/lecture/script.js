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

/**
 * Type Conversion and Coercion
 */
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log(`I am ${23} years old`);
console.log('23' - '10' - 3);
console.log('10' / 2);

// eslint-disable-next-line
let n = '3' + 1; // 11
n -= 1;
console.log(n);
*/

/**
 * Trythy and Falsy Values
 */
/*
// 5 falsy values: 0, '', NaN, undefined, null
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You shold get a job!`);
}

const height = 0;
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

/**
 * Equality Operators: == vs. ===
 */
/*
const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = +prompt(`What's your favorit number?`);
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!');
} else if (favorite === 7) {
  console.log('7 is also a cool number');
} else if (favorite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) console.log('Why not 23?');
*/

/**
 * Logical Operators
 */
/*
console.log(true && true);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(false || false);
console.log(!true);

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/**
 * The switch Statement
 */

const day = 'monday';

// eslint-disable-next-line default-case
switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Not a valid day!');
    break;
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
