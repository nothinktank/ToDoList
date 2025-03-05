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

  let projectList = {general: [item], general2: [item], general3: [item]};
  // generalProject.toDoItems.push('set up object name check during adding items');
  //display all projects
  console.log(projectList);

//display project list
  //get reference to myProjects in HTML
  let myProjects = document.querySelector('.myProjects');

  function displayProjects() {
    let projectNameArray = Object.keys(projectList);
    console.log(projectNameArray); 

    for (let i = 0; i < projectNameArray.length; i++) {
      let newProject = document.createElement('li');
      let removeProjectBtn = document.createElement('button');
      let projectTitle= document.createElement('div');
      let listOfTodoItems = document.createElement('ul');

      projectTitle.textContent = projectNameArray[0];



      myProjects.appendChild(newProject);
      newProject.appendChild(projectTitle);
      newProject.appendChild(listOfTodoItems);
      newProject.appendChild(removeProjectBtn);
    }
  }

  displayProjects();

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