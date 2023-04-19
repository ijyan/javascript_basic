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

const $HIDDEN = 'hidden';

let scores;
let currentScore;
let activePlayer;
let playing;

// 초기화
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  $scoreZero.textContent = 0;
  $scoreOne.textContent = 0;
  $currentZero.textContent = 0;
  $currentOne.textContent = 0;

  $dice.classList.add($HIDDEN);
  $playerZero.classList.remove('player--winner');
  $playerOne.classList.remove('player--winner');
  $playerZero.classList.add('player--active');
  $playerOne.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  // 플레이어 변환
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  $playerZero.classList.toggle('player--active');
  $playerOne.classList.toggle('player--active');
};

// 주사위 굴림
const rollingDice = () => {
  if (playing) {
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
      switchPlayer();
    }
  }
};

const clickHold = () => {
  if (playing) {
    // 현재 점수를 현재 플레이어의 점수에 추가
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 플레이어의 점수가 100보다 크거나 같은지 확인
    if (scores[activePlayer] >= 10) {
      // 맞으면 게임을 끝냄
      playing = false;
      $dice.classList.add($HIDDEN);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 아니면 플레이어 변환
      switchPlayer();
    }
  }
};

$btnRoll.addEventListener('click', rollingDice);
$btnHold.addEventListener('click', clickHold);
$btnNew.addEventListener('click', init);
