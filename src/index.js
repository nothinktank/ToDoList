import './style.css';
import {Item, addNewItem} from './item.js';
// import {Project, addNewProject} from './project.js';

import createPopup from './newItemPopup.js';
// import hardenImage from './chef.jpg';

const image = document.createElement('img');
// image.src = hardenImage;
const div = document.querySelector('div');
const subHeader = document.createElement('header');

//nav buttons
const addProject = document.querySelector('.addProject');


//default home page
  //create an array for project list with a "general" project that items go into if project isn't specified on creation
  // let generalProject = new Project('general');
  // console.log(typeof(generalProject));
  const item = new Item('work on popup modal', 'add a popup modal for item detail', '3/1/2025','1' );

  let projectList = {general: [item]};
  // generalProject.toDoItems.push('set up object name check during adding items');
  //display all projects
  console.log(projectList);
function renderHome() {
  // subHeader.textContent = 'best barbeque chicken in LA';
  // subHeader.id = 'subHeader';

  // div.appendChild(subHeader);
  // div.appendChild(image); 
}
renderHome();


item.detail();

document.querySelector('.submit-btn').addEventListener('click', ()=>{
  addNewItem(projectList);
  console.log(projectList);
}  );



//call the project popup modal on click

let popup = createPopup('#item-popup');
document.querySelector('#open-item-popup').addEventListener('click', popup);

let removeBtnList = document.querySelectorAll('.remove');

//call the project popup modal on click