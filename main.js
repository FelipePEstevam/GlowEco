let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('open');
}
