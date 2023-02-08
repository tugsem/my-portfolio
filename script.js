const hamburger = document.querySelector('#hamburger-btn');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('.main-wrapper');
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
    description: 'Dream rent is an appointment booking application, that allows users to book an appointment to visit their dream home. This application is built using React in the front-end and the back-end is built using Rails.',
    imageSrc: './assets/work-img/dream-rent-login.png',
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
    name: 'Air Pollution App',
    description: 'A (SPA) web application created with Air Pollution Api, users can check levels of the cities, filter them via dropdown menu and see the details per city on the new page.',
    imageSrc: './assets/work-img/airPollution.jpg',
    technologies: [
      'JavaScript',
      'React/Redux',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://main.d3dcuht188qbz2.amplifyapp.com',
    SourceLink: 'https://github.com/tugsem/air-pollution',
    date: '2022',
    stack: 'Front End Dev',
  },
  {
    name: 'Village Festival',
    description: 'A responsive website about an upcoming event, the activities, and information about artists who are going to attend the event.',
    imageSrc: './assets/work-img/villageFest.png',
    technologies: [
      'JavaScript',
      'CSS',
      'HTML',
    ],
    liveVersionLink: 'https://tugsem.github.io/VillageFestival/',
    SourceLink: 'https://github.com/tugsem/VillageFestival',
    date: '2022',
    stack: 'Front End Dev',
  },
  {
    name: 'Space Traveler\'s Hub',
    description: 'A (SPA) web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join missions.',
    imageSrc: './assets/work-img/spaceTravelers.png',
    technologies: [
      'JavaScript',
      'React/Redux',
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
  <div class="img-work" alt="work image"></div>
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
  workImg.style.backgroundImage = `url('${works[index].imageSrc}')`;
  workDesc.innerText = works[index].description;

  createTechList(ul, works[index].technologies);
  skillsDiv.prepend(ul);

  subDesc.innerHTML = `
  <h3 class="stack"> ${works[index].stack}</h3>
  <h3 class="year"> ${works[index].date}</h3>
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
    const workImage = section.children[0];

    if (index % 2 === 0) {
      section.className = 'work';
    } else {
      section.className = 'work right';
    }
    langs.innerText = '';
    workImage.style.backgroundImage = `url('${imageSrc}')`;
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
    hamburger.classList.toggle('active');
    alert.classList.toggle('active');
    navMenu.classList.toggle('active');
    mainSection.classList.toggle('active');
    bodyElement.classList.toggle('active');
    header.classList.toggle('active');
  });
});

window.onload = () => {
  generateWorks();
};
