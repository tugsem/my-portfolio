const hamburger = document.querySelector('#hamburger-btn');
const exit = document.querySelector('#exit-btn');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('.main');
const bodyElement = document.querySelector('body');
const workContainer = document.querySelector('.work-container');

const popup = document.querySelector('#popup-overlay');
const closePopup = document.querySelector('#close-btn');
const subDesc = document.querySelector('.sub-desc');
const workImg = document.querySelector('#popup-img');
const popupTitle = document.querySelector('#popup-content h2');
const popupContent = document.querySelector('#popup-content');
const skillsDiv = document.querySelector('.project-info');
const workDesc = document.querySelector('#popup-description');

const liveBtn = document.querySelector('#live-btn');
const sourceBtn = document.querySelector('#source-btn');

const form = document.querySelector('#contact-form');
const msg = document.querySelector('small');
const EMAIL_INVALID = 'Form is not sent. Please use lower case.';

const ul = document.createElement('ul');
ul.className = 'd-flex languages lang-subs';
skillsDiv.prepend(ul);


const generatePopup = (index) => {
  ul.innerText = '';
  popupTitle.innerText = works[index].name;
  workImg.src = works[index].imageSrc;
  workDesc.innerText = works[index].description;
  works[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'lang d-flex';
    li.innerText = skill;
    ul.appendChild(li);
  });
  subDesc.innerHTML = `
  <img src="./assets/Counter.png" alt="">
  <h3 class="stack">Front End Dev</h3>
  <img src="./assets/Counter.png" alt="">
  <h3 class="year">2022</h3>
  `;
  liveBtn.href = works[index].liveVersionLink;
  sourceBtn.href = works[index].SourceLink;
};

const handleDetailBtn = (index) => {
  popup.classList.add('active');
  bodyElement.classList.add('active');
  popupContent.classList.add('active');
  generatePopup(index);
};

const generateWorks = () => {
  works.map((work, index) => {
    const section = document.createElement('section');
    const textContainer = document.createElement('div');
    textContainer.className = 'info';
    const langs = document.createElement('ul');
    langs.className = 'languages d-flex';
    const btn = document.createElement('button');

    if (index % 2 === 0) {
      section.className = 'work';
    } else {
      section.className = 'work right';
    }
    section.innerHTML = `
    <img class="img-work" src="${work.imageSrc}" alt="${work.name}">
    `;
    textContainer.innerHTML = `
    <h2 class="work-title">${work.name}</h2>
    <div class="sub-desc d-flex">
        <img src="./assets/Counter.png" alt="">
        <h3 class="stack">${work.stack}</h3>
        <img src="./assets/Counter.png" alt="">
        <h3 class="year">${work.date}</h3>
    </div>
    <p class="description">${work.description}</p>
    `;
    work.technologies.map((tech) => {
      const li = document.createElement('li');
      li.className = 'lang d-flex';
      li.innerText = tech;
      langs.appendChild(li);
      return null;
    });
    textContainer.appendChild(langs);
    btn.className = 'd-flex see-project detail-btn';
    btn.innerText = 'See project';
    btn.type = 'button';
    btn.addEventListener('click', () => handleDetailBtn(index));
    textContainer.appendChild(btn);
    section.appendChild(textContainer);
    workContainer.appendChild(section);
    return null;
  });
};

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  bodyElement.classList.remove('active');
  popupContent.classList.remove('active');
});

hamburger.addEventListener('click', () => {
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
  });
});

function showError(email, message) {
  msg.innerText = message;
  msg.className = 'error';
  email.classList.add('active');
}

function validateEmail(email, EMAIL_INVALID) {
  if (/[a-z]/.test(email.value) && /[A-Z]/.test(email.value)) {
    return showError(email, EMAIL_INVALID);
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  msg.innerText = '';
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});

window.onload = () => {
  generateWorks();
};
