import './style.css';
import Item from './item.js';
import {Project, addNewProject} from './project.js';

import createPopup from './newProjectPopup.js';
// import hardenImage from './chef.jpg';

const image = document.createElement('img');
// image.src = hardenImage;
const div = document.querySelector('div');
const subHeader = document.createElement('header');

//nav buttons
const addProject = document.querySelector('.addProject');


//default home page
  //create an array for project list with a "general" project that items go into if project isn't specified on creation
  let generalProject = new Project('general');
  // console.log(typeof(generalProject));
  let projectList = [generalProject];
  //display all projects
  console.log(projectList);
function renderHome() {
  // subHeader.textContent = 'best barbeque chicken in LA';
  // subHeader.id = 'subHeader';

  // div.appendChild(subHeader);
  // div.appendChild(image); 
}
renderHome();

console.log('logging something for the restaurant');

const item = new Item('work on popup modal', 'add a popup modal for item detail', '3/1/2025','1' );
item.detail();

//add new project to project list array when click submit button
//   function addNewProject(){
//     let popupNode = document.querySelector('#popup');
//     let name = document.querySelector('#name');
//     let priority = document.querySelector('#priority');
    
//     if (name.value) {
//       let newProject = new Project(name.value, priority.value);
//       projectList.push(newProject);
//       // this.displayBook(nb);

//     name.value = '';
//     priority.value = '';
  
//     popupNode.classList.remove('active');
//   }
// }
// let newProject = new Project();
document.querySelector('.submit-btn').addEventListener('click', ()=>{
  addNewProject(projectList);
  console.log(projectList);
}  );



//set up nav button on-click events

// addProject.addEventListener('click', () => {
//   while(div.firstChild){
//     div.removeChild(div.firstChild);
//   }
//   renderMenu();
// })

// infoButton.addEventListener('click', () => {
//   while(div.firstChild){
//     div.removeChild(div.firstChild);
//   }
//   renderRestaurantInfo();
// })

// homeButton.addEventListener('click', () => {
//   while(div.firstChild){
//     div.removeChild(div.firstChild);
//   }
//   renderHome();
// })

//call the popup modal on click

let popup = createPopup('#popup');
document.querySelector('#open-project-popup').addEventListener('click', popup);

let removeBtnList = document.querySelectorAll('.remove');