const form = document.querySelector('.form');
const input = document.querySelector('.form__input');

input.addEventListener('focus', function() {
    form.classList.add('form--active');
});

input.addEventListener('blur', function() { // Если фокус проподает
    form.classList.remove('form--active');
});