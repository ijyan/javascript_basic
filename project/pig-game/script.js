// element
const $playerZero = document.querySelector('.player--0');
const $playerOne = document.querySelector('.player--1');
const $scoreZero = document.querySelector('#score--0');
const $scoreOne = document.querySelector('#score--1');
const $currentZero = document.querySelector('#current--0');
const $currentOne = document.querySelector('#current--1');

const $dice = document.querySelector('.dice');
const $btnNew = document.querySelector('.btn--new');
const $btnRoll = document.querySelector('.btn--roll');
const $btnHold = document.querySelector('.btn--hold');

const $HIDDEN = document.querySelector('.hidden');

// 초기화
$scoreZero.textContent = 0;
$scoreOne.textContent = 0;
$dice.classList.add($HIDDEN);

// 주사위 굴림
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const rollingDice = () => {
  // 1. 랜덤 숫자 생성
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. 랜덤 숫자를 화면에 표시
  $dice.classList.remove($HIDDEN);
  $dice.src = `dice-${dice}.png`;

  // 3. 숫자가 1이면 플레이어 변환
  if (dice !== 1) {
    // 현재 점수에 더함
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // 플레이어 변환
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    $playerZero.classList.toggle('player--active');
    $playerOne.classList.toggle('player--active');
  }
};

$btnRoll.addEventListener('click', rollingDice);
