const hamburger = document.querySelector('#hamburger-btn');
const exit = document.querySelector('#exit-btn');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('.main');
const bodyElement = document.querySelector('body');


hamburger.addEventListener('click', ()=> {
  mainSection.classList.add('active');
  bodyElement.classList.add('active');
  navMenu.classList.add('active');
});

exit.addEventListener('click', () => {
  navMenu.classList.remove('active');
  mainSection.classList.remove('active');
  bodyElement.classList.remove('active');
});

document.querySelectorAll('.mobile-menu > li').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mainSection.classList.remove('active');
    bodyElement.classList.remove('active');
  })
})

