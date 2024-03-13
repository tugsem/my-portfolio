import handleDetailBtn from './popupMenu.js';
import works from './works.js';
import createTechList from './createTechList.js';

const hamburger = document.querySelector('#hamburger-btn');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('.main-wrapper');
const bodyElement = document.querySelector('body');
const main = document.querySelector('main');
const workContainer = document.querySelector('.work-container');
const alert = document.querySelector('.alert');

const upArrow = document.querySelector('.up-arrow');

const createSection = () => {
  const section = document.createElement('section');
  section.className = 'work-section';
  section.innerHTML = `
  <div class="img-work"></div>
  <div class="text-wrapper">
  <div class="info"></div>
  <ul class="languages d-flex"></ul>
  <button class="d-flex see-project detail-btn" type="button">See Project</button>
  </div>
  `;
  return section;
};

const generateWorkInfo = (node, name, stack, date, description) => {
  node.innerHTML = `
  <h2 class="work-title"> ${name}</h2>
  <div class="sub-desc d-flex">
      <h3 class="stack"> ${stack}</h3>
      <h3 class="year"> ${date}</h3>
  </div>
  <p class="description">${description}</p>
  `;
};

const generateWorks = () => {
  works.forEach((work, index) => {
    const {
      name, stack, date, description, technologies, imageSrc,
    } = work;
    const section = createSection();
    const textContainer = section.children[1].children[0];
    const langs = section.children[1].children[1];
    const btn = section.children[1].children[2];
    const workImages = section.children[0];  //selects the div

    if (index % 2 === 0) {
      section.className = 'work';
    } else {
      section.className = 'work right';
    }
    langs.innerText = '';
    workImages.style.backgroundImage = `url('${imageSrc[0]}')`;
    workImages.style.cursor = 'pointer';
    [workImages, btn].forEach(function (element) {
      element.addEventListener('click', function () {
        handleDetailBtn(index);
       })
    })
    generateWorkInfo(textContainer, name, stack, date, description, technologies);
    createTechList(langs, technologies);
    workContainer.appendChild(section);
  });
};

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainSection.classList.toggle('active');
  main.classList.toggle('active');
  navMenu.classList.toggle('active');
  bodyElement.classList.toggle('active');
  alert.classList.toggle('active');
  header.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu > li').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    alert.classList.toggle('active');
    navMenu.classList.toggle('active');
    mainSection.classList.toggle('active');
    main.classList.toggle('active');
    bodyElement.classList.toggle('active');
    header.classList.toggle('active');
  });
});

const scrollFunction = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upArrow.style.display = 'flex';
  } else {
    upArrow.style.display = 'none';
  }
};

upArrow.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => {
  scrollFunction();
};
window.onload = () => {
  generateWorks();
};
