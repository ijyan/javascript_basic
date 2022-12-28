### Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass /
height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

- TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
- TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

**번역**

마크와 존은 다음 공식을 사용하여 계산된 그들의 BMI를 비교하려고 합니다: `BMI = mass / height ** 2 = mass / (height * height)`(mass(kg) & height(
meter))

1. 마크와 존의 질량과 높이를 변수에 저장합니다.
2. 공식을 사용하여 두 BMI를 계산합니다(두 버전을 모두 구현할 수도 있습니다.)
3. 마크의 BMI가 존보다 높은지 여부에 대한 정보를 포함하는 boolean 변수 `markHigherBMI`를 만듭니다.

- TEST DATA 1: 마크의 몸무게는 78kg이고 키는 1.69m이다. 존의 몸무게는 92kg이고 키는 1.95m이다.
- TEST DATA 2: 마크의 몸무게는 95kg이고 키는 1.88m이다. 존의 몸무게는 85kg이고 키는 1.76m이다.

```js
// TEST DATA 1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;
*/

// TEST DATA 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMI = (mass, height) => mass / height ** 2;
const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(`BMIMark: ${BMIMark}
BMIJohn: ${BMIJohn}
markHigherBMI: ${markHigherBMI}`);
```

### Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher
   than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (
   23.9)!"

HINT: Use an if/else statement

**번역**
Challenge #1의 BMI 예제 코드를 사용하여 개선하십시오.

1. 누가 더 높은 BMI를 가지고 있는지 콘솔에 출력합니다. 메시지는 `Mark's BMI is higher than John's!` 또는 `John's BMI is higher than Mark's!`가 될 수
   있습니다.
2. 템플릿 리터럴(template literal)을 사용하여 BMI 값을 출력에 포함합니다. 예: `Mark's BMI(28.3) is higher than John's BMI(23.9)`

힌트: if/else문을 사용하세요.

```js
// TEST DATA 1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.95;
*/

// TEST DATA 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMI = (mass, height) => mass / height ** 2;
const BMIMark = BMI(massMark, heightMark);
const BMIJohn = BMI(massJohn, heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`)
} else {
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Marks's (${BMIMark.toFixed(1)})!`)
}
```
