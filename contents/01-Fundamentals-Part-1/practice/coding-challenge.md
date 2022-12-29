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
  console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
} else {
  console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Marks's (${BMIMark.toFixed(1)})!`);
}
```

### Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the
highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't
   forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score
   than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for
   minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both
   have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK

**번역**

돌핀스와 코알라라는 두 개의 체조 팀이 있습니다. 그들은 서로 3번 경쟁합니다. 평균 점수가 가장 높은 우승자가 트로피를 받습니다.

1. 아래 테스트 데이터를 사용하여 각 팀의 평균 점수를 계산합니다.
2. 팀의 평균 점수를 비교하여 대회 우승자를 결정하고 콘솔에 출력합니다. 무승부가 있을 수 있다는 것을 잊지 마십시오. 따라서 무승부는 평균 점수가 같다는 것을 의미합니다.
3. 보너스 1: 최소 100점에 대한 요구 사항을 포함합니다. 이 규칙에 따르면, 한 팀이 다른 팀보다 높은 점수를 받고 동시에 100점 이상 받아야한 승리합니다. 힌트: 논리 연산자를 사용하여 최소 점수와 여러
   개의 'else-if' 블록을 테스트합니다.
4. 보너스 2: 최소 점수는 무승부도 적용됩니다! 무승부는 두 팀의 점수가 같고 두 팀의 점수가 100점 이상일 때만 발생합니다. 그렇지 않으면 어떤 팀도 트로피를 받지 못합니다.

- TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

```js
// TEST DATA
const scoreDolphins = (97 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy 🏆');
}
```

```js
// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

// BONUS 2
/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
*/

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
```
