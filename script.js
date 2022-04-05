const hamburger = document.querySelector('#hamburger-btn');
const exit = document.querySelector('#exit-btn');
const navMenu = document.querySelector('.nav-menu');
const mainSection = document.querySelector('.main');
const bodyElement = document.querySelector('body');
const seeProjectBtn = document.querySelectorAll('.see-project');

const popup = document.querySelector('#popup-overlay');
const closePopup = document.querySelector('#close-btn');
const workImg = document.querySelector('#popup-img');
const popupTitle = document.querySelector('#popup-content h2');
const popupContent = document.querySelector('#popup-content');
const skillsDiv = document.querySelector('.project-info');
const workDesc = document.querySelector('#popup-description');
const liveBtn = document.querySelector('#live-btn');
const sourceBtn = document.querySelector('#source-btn');

const ul = document.createElement('ul');
ul.className = 'languages';
skillsDiv.prepend(ul);

const works = [
  {
    name: 'Topic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageSrc: './assets/Snapshoot1.png',
    technologies: [
      'javascript',
      'Css',
      'Html',
    ],
    liveVersionLink: '#',
    SourceLink: '#',
  },

  {
    name: 'Multi-post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageSrc: './assets/Snapshoot2.png',
    technologies: [
      'javascript',
      'Css',
      'Html',
    ],
    liveVersionLink: '#',
    SourceLink: '#',
  },

  {
    name: 'Topic',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageSrc: './assets/Snapshoot3.png',
    technologies: [
      'javascript',
      'Css',
      'Html',
    ],
    liveVersionLink: '#',
    SourceLink: '#',
  },

  {
    name: 'Multi-post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageSrc: './assets/Snapshoot2.png',
    technologies: [
      'javascript',
      'Css',
      'Html',
    ],
    liveVersionLink: '#',
    SourceLink: '#',
  },
];

function generatePopup(index) {
  ul.innerText = '';
  popupTitle.innerText = works[index].name;
  workImg.src = works[index].imageSrc;
  workDesc.innerText = works[index].description;
  works[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'lang';
    li.innerText = skill;
    ul.appendChild(li);
  });
  liveBtn.href = works[index].liveVersionLink;
  sourceBtn.href = works[index].SourceLink;
}

seeProjectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popup.classList.add('active');
  bodyElement.classList.add('active');
  popupContent.classList.add('active');
  generatePopup(Array.prototype.indexOf.call(seeProjectBtn, btn));
}));

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