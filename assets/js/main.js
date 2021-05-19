addEventListener('DOMContentLoaded', () => {
    const button_open = document.querySelector('.button-open');
    const nav_menu = document.querySelector('.nav__menu');

    button_open.addEventListener('click', () => {
        nav_menu.classList.toggle('active');
    });
})