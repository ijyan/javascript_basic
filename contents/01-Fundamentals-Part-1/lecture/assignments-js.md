### LECTURE: Values and Variables

1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own
   country (population in millions)
2. Log their values to the console

**번역**

1. `country`, `continent`, `population`라는 변수를 선언하고 자신의 국가(인구 수백만)에 따라 값을 할당합니다.
2. 값을 콘솔에 기록합니다.

```js
let country = 'Korea';
let continent = 'Asia';
let population = 51;
console.log(country);
console.log(continent);
console.log(population);
```

### LECTURE: Data Types

1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean
   value. Also declare a variable 'language', but don't assign it any value yet.
2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.

**번역**

1. `isIsland`라는 변수를 선언하고 국가에 따라 값을 설정합니다. 변수에는 부울 값이 있어야 합니다. 또한 변수 `language`를 선언하지만 아직 값을 할당하지는 마십시오.
2. `isIsland`, `population`, `country` 및 `language` 의 타입을 콘솔에 기록하세요.

```js
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
```

### LECTURE: let, const and var

1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just
   choose one)
2. Think about which variables should be const variables (which values will never change, and which might change?).
   Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens

**번역**

1. `language`의 값을 작성자가 사는 곳의 언어로 설정합니다.(일부 국가는 여러 언어를 사용하지만 하나만 선택)
2. 어떤 변수가 `const` 변수여야 하는지 생각하세요.(어떤 값은 절대 변경되지 않고, 어떤 값은 변경될 수 있습니다.) 그런 다음 이러한 변수를 `const`로 변경합니다.
3. 지금 변경된 변수 중 하나를 변경하고 어떤 일이 일어나는지 관찰해 보세요.

```js
language = 'Korean';
const country = 'Korea';
const continent = 'Asia';
const isIsland = false;
isIsland = true;
```

### LECTURE: Basic Operators

1. If your country split in half, and each half would contain half the population, then how many people would live in
   each half?
2. Increase the population of your country by 1 and log the result to the console.
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does your country have less people than the average
   country?
5. Based on the variables you created, create a new variable 'description' which contains a string with this format: '
   Portugal is in Europe, and its 11 million people speak portuguese'

**번역**

1. 만약 여러분의 나라가 반으로 갈라지고, 각각의 반이 인구의 반을 포함한다면, 각각의 반에 얼마나 많은 사람들이 살까요?
2. `population`을 1 늘리고 결과를 콘솔에 표시하세요.
3. 핀란드의 인구는 6백만 명입니다. 우리 나라는 핀란드보다 인구가 더 많나요?
4. 한 나라의 평균 인구는 3천 3백만 명입니다. 우리 나라는 평균 보다 인구 수가 적나요?
5. 생성한 변수를 기준으로 '포르투갈은 유럽에 있으며 1.100만 명이 포르투갈어를 사용합니다'라는 형식의 문자열이 포함된 새 변수 `description`을 만듭니다.

```js
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description =
        country +
        ' is in ' +
        continent +
        ', and its ' +
        population +
        ' million people speak ' +
        language;
console.log(description);
```

### LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax

**번역**

1. 이번에는 템플릿 리터럴 구문을 사용하여 마지막 할당에서 'description' 변수를 재생성합니다.

```js
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
```

### LECTURE: Taking Decisions: if / else Statements

1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's
   population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the
   22 is the average of 33 minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and
   set the population back to original.

**번역**

1. 만약 당신의 나라의 인구가 3,300만 명보다 많다면, 콘솔에 '포르투갈의 인구는 평균 이상이다'라는 문자열을 기록하세요. 그렇지 않으면 '포르투갈의 인구는 평균보다 2,200만 명 적다'와 같은 문자열을
   로그에 기록합니다.(22는 33에서 국가 인구를 뺀 평균입니다)
2. 결과를 확인한 후, `population`을 임시로 13 으로 변경한 후 130 으로 변경합니다. 다른 결과를 확인하고, `population`을 원래대로 설정합니다.

```js
if (population > 33) {
   console.log(`${country}'s population is above average`);
} else {
   console.log(`${country}'s population is ${33 - population} million below average`);
}
```

### LECTURE: Type Conversion and Coercion

1. Predict the result of these 5 operations without executing them:

```
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
```

2. Execute the operations to check if you were right

**번역**

1. 다음 5가지 작업을 실행하지 않고 결과를 예측합니다.
2. 작업을 실행하여 맞는지 확인합니다.

```js
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
```

### LECTURE: Equality Operators: == vs. ===

1. Declare a variable 'numNeighbours' based on a prompt input like this:
   prompt('How many neighbour countries does your country have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
   is greater than 1.
4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is
   exactly 1 border! Why is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.
8. Reflect on why we should use the === operator and type conversion in this situation.

**번역**

1. 다음과 같은 프롬프트 입력을 기반으로 변수 `numNeighbors`를 선언합니다.
   prompt('당신의 나라에는 이웃 국가가 몇 개 있습니까?');
2. 이웃이 한 명만 있는 경우 콘솔에 'Only 1 border!'를 출력합니다(지금은 loose equality == 사용).
3. `numNeighbors`가 1보다 클 경우 `else-if` 블록을 사용하여 'More than 1 border'를 출력합니다.
4. 다른 블록을 사용하여 'No borders'을 출력합니다(이 블록은 `numNeighbors`가 0이거나 다른 값일 때 실행됩니다).
5. 1 및 0을 포함하여 `numNeighbors`의 다른 값으로 코드를 테스트합니다.
6. `==`를 `===`로 변경하고 `numNeighbors`와 동일한 값으로 코드를 다시 테스트합니다. 경계가 정확히 하나일 때 무슨 일이 일어나는지 주목하세요! 왜 이런 일이 생기는 건가요?
7. 마지막으로 `numNeighbors`를 숫자로 변환하고, 1을 입력하면 어떻게 되는지 확인합니다.
8. 이 상황에서 `===` 연산자와 유형 변환을 사용해야 하는 이유를 곰곰이 생각해 보십시오.

```js
const numNeighbours = +prompt('How many neighbour countries does your country have ? ');
if (numNeighbours === 1) {
   console.log('Only 1 border!');
} else if (numNeighbours > 1) {
   console.log('More than 1 border');
} else {
   console.log('No borders');
}
```

### LECTURE: Logical Operators

1. Comment out the previous code so the prompt doesn't get in the way.
2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less
   than 50 million people and is not an island.
3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition
   that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does
   not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to
   make the condition true (unless you live in Canada :D)

**번역**

1. 프롬프트가 방해가 되지 않도록 이전 코드를 주석 처리하세요.
2. 사라가 살 새로운 나라를 찾고 있다고 합시다. 그녀는 영어를 사용하고 인구가 5천만 명 미만이며 섬이 아닌 나라에서 살고 싶어합니다.
3. 사라가 당신의 나라가 그녀에게 적합한지 알아내는 데 도움이 되도록 `if` 문을 쓰세요. 사라의 모든 기준을 설명하는 조건을 작성해야 합니다. 시간을 두고 필요한 경우 솔루션의 일부를 확인하십시오.
4. 만약 당신의 나라가 맞다면, 다음과 같은 문자열을 출력하세요: `You should live in Portugal :)`. 그렇지
   않으면 `Portugal does not meet your criteria :(`를 출력합니다.
5. 아마도 당신의 나라는 모든 기준을 충족하지 못할 것입니다. 그러니 돌아가서 조건을 참으로 만들기 위해 몇 가지 변수를 일시적으로 변경하십시오(캐나다에 거주하지 않는 한:D).

```js
if (language === 'english' && population < 50 && !isIsland) {
   console.log(`You should live in ${country} :)`);
} else {
   console.log(`${country} does not meet your criteria :(`);
}
```

### LECTURE: The switch Statement

1. Use a switch statement to log the following string for the given 'language':

```
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
```

**번역**

1. switch 문을 사용하여 지정된 `language`에 대해 다음 문자열을 기록합니다.

```js
switch (language) {
   case 'chinese':
   case 'mandarin':
      console.log('MOST number of natice speakers!');
      break;
   case 'spanish':
      console.log('2nd place in number of native speakers');
      break;
   case 'english':
      console.log('3rd place');
      break;
   case 'hindi':
      console.log('Number 4');
      break;
   case 'arabic':
      console.log('5th most spoken language');
      break;
   default:
      console.log('Great language too :D');
}
```

### LECTURE: The Conditional (Ternary) Operator

1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the
   console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'.
   Notice how only one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and
   set the population back to original.

**번역**

1. 만약 너의 나라의 인구가 3천 3백만명 이상이라면, `ternary operator`를 사용하여 다음과 같은 문자열을 콘솔에 출력합니다: `Portugal's population is above average`
   그렇지 않으면, `Portugal's population is below average`를 출력합니다. 이 두 문장 사이에 한 단어만 어떻게 변하는지 주목하세요!
2. 결과를 확인한 후, `population`을 임시로 13 으로 변경한 후 130 으로 변경합니다. 다른 결과를 확인하고 `population`을 원래대로 설정합니다.

```js
console.log(`${country}'s population is ${population > 33 ? 'above' :
        'below'} average`);
```
