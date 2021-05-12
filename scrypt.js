const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

const home = document.getElementById("clickHome");
const about = document.getElementById("clickAbout");
const project = document.getElementById("clickProject");
const contact = document.getElementById("clickContact");


hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
})

home.addEventListener('click', () => {
    menu.classList.toggle('show');
})

about.addEventListener('click', () => {
    menu.classList.toggle('show');
})

project.addEventListener('click', () => {
    menu.classList.toggle('show');
})

contact.addEventListener('click', () => {
    menu.classList.toggle('show');
})