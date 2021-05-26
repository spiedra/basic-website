addEventListener('DOMContentLoaded', () => {
    const button_open = document.querySelector('.button-open');
    const nav_menu = document.querySelector('.nav__menu');
    const hola = document.querySelector('.article__main-container');

    button_open.addEventListener('click', () => {
        nav_menu.classList.toggle('active');
    });

    hola.addEventListener('touchstart', () => {
        alert("jajajja hola");
    });
})