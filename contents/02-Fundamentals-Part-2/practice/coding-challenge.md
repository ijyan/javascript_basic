### Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works
differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and '
   avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
   Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores .

**번역**

돌핀스와 코알라 두 팀으로 돌아가세요! 새로운 체조 종목이 있는데, 그것은 다르게 작용한다. 각 팀은 3번 경기를 하고, 3개의 점수의 평균을 계산한다. 한 팀이 상대 팀의 평균 점수의 두 배 이상을 얻어야만
이깁니다. 그렇지 않으면, 어떤 팀도 이기지 못해요!

1. 화살표 함수 `calcAverage`를 생성하여 3점의 평균을 계산합니다.
2. 함수를 사용하여 두 팀의 평균을 계산합니다.
3. 위의 규칙에 따라 각 팀의 평균 점수를 매개 변수 (`avgDolhins`, `avgKoalas`)로 취하는 `checkWinner` 기능을 만든 다음 승리 포인트와 함께 콘솔에 기록합니다. 예: "코알라가 (
   30 대 13) 승리".
4. `checkWinner` 함수를 사용하여 DATA 1과 DATA 2의 승자를 결정합니다.
5. 무승부는 무시합니다.

- TEST DATA 1: 돌고래는 44점, 23점, 71점을 받는다. 코알라는 65점, 54점, 49점을 받는다.
- TEST DATA 2: 돌고래는 85점, 54점, 41점을 받는다. 코알라는 23점, 34점, 27점을 받는다.


- HINT: 3개 값의 평균을 계산하려면 값을 모두 합하여 3으로 나눕니다.
- HINT: 숫자 A가 더블 숫자 B 이상인지 확인하려면 A >= 2 * B를 확인하고, 이를 팀의 평균 점수에 적용한다.

```js
const calcAverage = (a, b, c) => (a + b + c) / 3;

// TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(85, 54, 41);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Koalas win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
```

### Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is
between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based
   on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function
   type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a
function! So you can just call a function as array values (so don't store the tip values in separate variables first,
but right in the new array) 😉

GOOD LUCK 😀

**번역**

Steven은 여전히 이전과 동일한 규칙을 사용하여 팁 계산기를 구축하고 있습니다: 계산서 값이 50에서 300 사이이면 계산서의 15%를 팁으로 주고, 값이 다르면 팁이 20%를 팁으로 줍니다.

1. 위의 규칙에 따라 계산된 모든 청구 값을 입력하고 해당 팁을 반환하는 함수 'calTip'을 작성합니다(필요한 경우 첫 번째 팁 계산기 챌린지에서 코드를 확인할 수 있습니다). 당신이 가장 좋아하는 기능 유형을
   사용하세요. 빌 값 100을 사용하여 함수를 테스트합니다.
2. 이제 어레이를 사용해 보겠습니다! 따라서 아래의 테스트 데이터를 포함하는 배열 `bills`를 작성하십시오.
3. 이전에 만든 함수에서 계산된 각 지폐의 팁 값을 포함하는 배열 `팁`을 만듭니다.
4. 보너스: 합계 값을 포함하는 배열 `합계`를 작성하여 `청구서 + 팁`을 제공합니다.

- TEST DATA: 125, 555 and 44

- HINT: 배열에는 각 위치에 값이 필요하며, 그 값은 실제로 함수의 반환 값이 될 수 있습니다! 따라서 함수를 배열 값으로 호출할 수 있습니다(따라서 팁 값을 먼저 별도의 변수에 저장하지 말고 새 배열에 바로
  저장하십시오) 😉

```js
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = bills.map((val, idx) => val + tips[idx]);

console.log(bills, tips, totals);
```

### Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value
   to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's
   BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

**번역**

마크와 존이 그들의 BMI를 비교하는 것으로 돌아가 봅시다! 이번에는, 계산을 실행하기 위해 객체를 사용해 봅시다! 기억하세요: BMI = 질량 / 키 ** 2 = 질량 / (키 * 키). (kg 단위 질량 및 미터
단위 높이)

1. 각 개체에 대해 전체 이름, 질량 및 높이에 대한 속성을 가진 개체를 만듭니다(Mark Miller 및 John Smith)
2. 각 객체에 대해 BMI를 계산하기 위해 `calcBMI` 메소드를 생성(두 개체에 대해 동일한 방법). BMI 값을 속성에 저장하고 메소드에서 반환합니다.
3. 전체 이름 및 각 BMI와 함께 BMI가 높은 콘솔에 기록합니다. 예: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

```js
const mark = {
  fullName: 'Mark Miller',
  mass    : 78,
  height  : 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fillName: 'John Smith',
  mass    : 92,
  height  : 1.95,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${
      john.fullName
    }'s BMI (${john.bmi.toFixed(1)})`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${
      mark.fullName
    }'s BMI (${mark.bmi.toFixed(1)})`,
  );
}
```

### Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for
   every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the
   average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how
   to solve it:
   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum'
   that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum'
   variable. This way, by the end of the loop, you have all values added together
   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the
   number of elements)
   4.3. Call the function with the 'totals' array

**번역**

이번에는 루프를 이용해 스티븐의 팁 계산기를 더욱 개선해 봅시다!

1. 10개의 테스트 청구서 값을 모두 포함하는 `bills` 배열을 만듭니다.
2. 팁 및 합계(`tip` 및 `totals`)에 대한 빈 배열을 만듭니다.
3. 이전에 작성한 `calcTip` 기능을 사용하여 청구서 배열의 모든 청구서 값에 대한 팁과 총 값(청구서 + 팁)을 계산합니다. for 루프를 사용하여 10개의 계산을 수행합니다!

- TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
- 힌트: 루프에서 calcTip을 호출하고 푸시 방법을 사용하여 팁 및 총 배열에 값을 추가합니다 😉

보너스: `arr` 배열을 인수로 하는 함수 `calcAverage`를 작성합니다. 이 함수는 지정된 배열에 있는 모든 숫자의 평균을 계산합니다. 이것은 어려운 도전입니다(이전에 해본 적이 없습니다)!

해결방법:

1. 먼저 배열의 모든 값을 추가해야 합니다. 덧셈을 하려면 0에서 시작하는 변수 `sum`을 만다는 것으로 시작합니다. 그런 다음 for루프를 사용하여 배열 위로 루프합니다. 각 반복에서 현재 값을 `sum`변수에
   추가합니다. 이렇게 하면 루프가 끝날 때까지 모든 값이 함께 추가됩니다.
2. 평균을 계산하려면 이전에 계산한 합계를 배열의 길이로 나눕니다(요소의 개수이므로)
3. `totals` 배열로 함수 호출

```js
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAvg = (arr) => arr.reduce((acc, cur) => acc + cur, 0) / arr.length;

console.log(calcAvg(totals));
console.log(calcAvg(tips));
```
