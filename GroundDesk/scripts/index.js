// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    navMenu.classList.toggle('is-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');

    console.log(isOpen);
})

function closeMenu() {
    navMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
}

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
})

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeMenu();
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        closeMenu();
    }
})
