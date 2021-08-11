// Mobile Menu

const menuButton = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');
menuButton.classList.replace('fa-bars', 'fa-times');
menuButton.classList.replace('fa-times', 'fa-bars');
const body = document.querySelector('body');
body.setAttribute('class', '');

const showMobileMenu = () => {
  document.querySelector('.navlist').classList.toggle('expand');
  body.classList.toggle('stop-scrolling');
  navbar.classList.toggle('show');
  menuButton.classList.toggle('fa-bars');
  menuButton.classList.toggle('fa-times');
};

menuButton.addEventListener('click', showMobileMenu);