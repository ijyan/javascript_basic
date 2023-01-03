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
