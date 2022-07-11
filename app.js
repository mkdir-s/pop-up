const popButton = document.querySelector('.button-pop');
const popUp = document.querySelector('.pop-up');
const closeButton = document.querySelector('.pop-up__body-close');
const themeButton = document.querySelector('.button-theme');

popButton.addEventListener('click', () => {
    popUp.classList.add('_active');
})
closeButton.addEventListener('click', () => {
    popUp.classList.remove('_active');
})
