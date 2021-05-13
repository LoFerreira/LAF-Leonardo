const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

const home = document.getElementById("clickHome");
const about = document.getElementById("clickAbout");
const project = document.getElementById("clickProject");
const contact = document.getElementById("clickContact");



hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    navMenu.classList.toggle('leleo');
})

home.addEventListener('click', () => {
    menu.classList.toggle('show');
    navMenu.classList.toggle('leleo');
})

about.addEventListener('click', () => {
    menu.classList.toggle('show');
    navMenu.classList.toggle('leleo');
})

project.addEventListener('click', () => {
    menu.classList.toggle('show');
    navMenu.classList.toggle('leleo');
})

contact.addEventListener('click', () => {
    menu.classList.toggle('show');
    navMenu.classList.toggle('leleo');
})