addEventListener('DOMContentLoaded', () => {
    const nav_menu = document.querySelector('.nav__menu');
    const button_open = document.querySelector('.button-open');
    const button_close = document.querySelector('.button-close');

    button_open.addEventListener('click', () => {
        // nav_menu.style.display = 'flex';
        nav_menu.style.top = '60px';
    })

    button_close.addEventListener('click', () => {
        // nav_menu.style.display = 'flex';
         mainMenu.style.top = '-100%';
    })
})