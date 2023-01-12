const hamburger = document.querySelector('#hamburger-btn');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('.main');
const bodyElement = document.querySelector('body');
const workContainer = document.querySelector('.work-container');
const alert = document.querySelector('.alert');
/* Pop-up window */
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
/* Pop-up window */
const form = document.querySelector('#contact-form');
const msg = document.querySelector('small');
const EMAIL_INVALID = 'Form is not sent. Please use lower case.';

const ul = document.createElement('ul');

const works = [
  {
    name: 'Dream Rent',
    description: 'Dream rent is an appointment booking application, allows users to book an appointment to visit their dream home. This application is built using React in the front-end and the back-end is built using Rails.',
    imageSrc: './assets/dreamrent.jfif',
    technologies: [
      'JavaScript',
      'Ruby on Rails',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://dream-rent-booking.netlify.app',
    SourceLink: 'https://github.com/tugsem/dream-rent',
    date: '2022',
    stack: 'Full Stack Dev',
  },
  {
    name: 'To-Do List',
    description: 'An SPA created with React Library. User can add, check, delete and edit items.',
    imageSrc: './assets/reactodo.jfif',
    technologies: [
      'JavaScript',
      'ReactJS',
      'Redux',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://tugsem.github.io/react-to-do/',
    SourceLink: 'https://github.com/tugsem/react-to-do',
    date: '2022',
    stack: 'Front End Dev',
  },
  {
    name: 'Space Traveler\'s Hub',
    description: 'A (SPA) web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join missions.',
    imageSrc: './assets/spacetravelershub.jfif',
    technologies: [
      'JavaScript',
      'ReactJS',
      'Redux',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://dancing-tarsier-912542.netlify.app',
    SourceLink: 'https://github.com/tugsem/space-travelers-react',
    date: '2022',
    stack: 'Front End Dev',
  },
];

const createSection = () => {
  const section = document.createElement('section');
  section.className = 'work-section';
  section.innerHTML = `
  <img class="img-work" alt="work image">
  <div class="text-wrapper">
  <div class="info"></div>
  <ul class="languages d-flex"></ul>
  <button class="d-flex see-project detail-btn" type="button">See Project</button>
  </div>
  `;
  return section;
};

const createTechList = (node, array) => {
  array.forEach((lang) => {
    const li = document.createElement('li');
    li.className = 'lang d-flex';
    li.innerText = lang;
    node.appendChild(li);
    return node;
  });
};
const generatePopup = (index) => {
  ul.className = 'languages d-flex';
  ul.innerText = '';
  popupTitle.innerText = works[index].name;
  workImg.src = works[index].imageSrc;
  workDesc.innerText = works[index].description;

  createTechList(ul, works[index].technologies);
  skillsDiv.prepend(ul);

  subDesc.innerHTML = `
  <img src="./assets/Counter.png" alt="">
  <h3 class="stack">${works[index].stack}</h3>
  <img src="./assets/Counter.png" alt="">
  <h3 class="year">${works[index].date}</h3>
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

const generateWorkInfo = (node, name, stack, date, description) => {
  node.innerHTML = `
  <h2 class="work-title">${name}</h2>
  <div class="sub-desc d-flex">
      <img src="./assets/Counter.png" alt="">
      <h3 class="stack">${stack}</h3>
      <img src="./assets/Counter.png" alt="">
      <h3 class="year">${date}</h3>
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
    const workImage = section.children[0];

    if (index % 2 === 0) {
      section.className = 'work';
    } else {
      section.className = 'work right';
    }
    langs.innerText = '';
    workImage.setAttribute('src', `${imageSrc}`);
    generateWorkInfo(textContainer, name, stack, date, description, technologies);
    createTechList(langs, technologies);

    btn.addEventListener('click', () => handleDetailBtn(index));
    workContainer.appendChild(section);
  });
};

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  bodyElement.classList.remove('active');
  popupContent.classList.remove('active');
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

// Toggle event
const toggleSwitch = document.querySelector('.theme-switch');

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

if (currentTheme === 'dark') {
  toggleSwitch.checked = true;
}
/**/

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainSection.classList.toggle('active');
  bodyElement.classList.toggle('active');
  navMenu.classList.toggle('active');
  alert.classList.toggle('active');
  header.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu > li').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mainSection.classList.remove('active');
    bodyElement.classList.remove('active');
  });
});

window.onload = () => {
  generateWorks();
};
