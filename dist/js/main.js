// Select DOM Items
const menuBTn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const NavItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBTn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBTn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        NavItems.forEach(item => item.classList.add('show'));

        //Set Menu State  
        showMenu = true;
    } else {
        menuBTn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        NavItems.forEach(item => item.classList.remove('show'));

        //Set Menu State  
        showMenu = false;
    }
}

