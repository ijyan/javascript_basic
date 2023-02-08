const $modal = document.querySelector('.modal');
const $overlay = document.querySelector('.overlay');
const $btnCloseModal = document.querySelector('.close-modal');
const $btnOpenModal = document.querySelectorAll('.show-modal');

const HIDDEN = 'hidden';

const openModal = () => {
  $modal.classList.remove(HIDDEN);
  $overlay.classList.remove(HIDDEN);
};
$btnOpenModal.forEach((item) => {
  item.addEventListener('click', openModal);
});

const closeModal = () => {
  $modal.classList.add(HIDDEN);
  $overlay.classList.add(HIDDEN);
};
$btnCloseModal.addEventListener('click', closeModal);
$overlay.addEventListener('click', closeModal);

// ESC 눌렀을 때
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$modal.classList.contains(HIDDEN)) closeModal();
});
