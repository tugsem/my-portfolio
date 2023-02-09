/* Pop-up window */
import works from './works.js';
import createTechList from './createTechList.js';

const bodyElement = document.querySelector('body');
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
const ul = document.createElement('ul');

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

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  bodyElement.classList.remove('active');
  popupContent.classList.remove('active');
});

export default handleDetailBtn;