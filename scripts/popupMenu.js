/* Pop-up window */
import works from './works.js';
import createTechList from './createTechList.js';

const bodyElement = document.querySelector('body');
const popup = document.querySelector('.popup-overlay');
const closePopup = document.querySelector('#close-btn');
const subDesc = document.querySelector('.sub-desc');
const imgContainer = document.querySelector('.workImg-container');
const popupTitle = document.querySelector('#work-title');
const popupContent = document.querySelector('.popup-content');
const skillsDiv = document.querySelector('.project-info');
const workDesc = document.querySelector('#popup-description');
const liveBtn = document.querySelector('#live-btn');
const sourceBtn = document.querySelector('#source-btn');
const upArrow = document.querySelector('.up-arrow');
/* Pop-up window */
const ul = document.createElement('ul');

const generatePopup = (index) => {
  ul.className = 'languages d-flex';
  ul.innerText = '';
  popupTitle.innerText = works[index].name;
  works[index].imageSrc.forEach(src => {
    let img = document.createElement('img');
    img.src = `${src}`;
    imgContainer.appendChild(img);
  })
  workDesc.innerText = works[index].description;
  createTechList(ul, works[index].technologies);
  skillsDiv.prepend(ul);

  subDesc.innerHTML = `
  <h4 class="stack"> ${works[index].stack}</h4>
  <h4 class="year"> ${works[index].date}</h4>
  `;
  liveBtn.href = works[index].liveVersionLink;
  sourceBtn.href = works[index].SourceLink;

};

const handleDetailBtn = (index) => {
  popup.classList.add('active');
  bodyElement.classList.add('active');
  popupContent.classList.add('active');
  upArrow.style.display='none';
  generatePopup(index);

};

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  bodyElement.classList.remove('active');
  popupContent.classList.remove('active');
  imgContainer.innerText = '';
});



export default handleDetailBtn;