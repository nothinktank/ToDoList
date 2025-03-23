import './style.css';
import {Item, addNewItem, displayItems} from './item.js';
// import {Project, addNewProject} from './project.js';

import createPopup from './newItemPopup.js';
import storageAvailable from './storage.js';
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
  const item = new Item('work on popup modal', 'add a popup modal for item detail', '3/1/2025','1', 'general' );
  const secondItem = new Item('fix duplicate item appending issue', 'find where the duplication is', '3/5/2025','1', 'general' );

  
  // general: [item, secondItem], general2: []
  let projectList = {};
  // generalProject.toDoItems.push('set up object name check during adding items');
  //display all projects
  
// let flattenedItemArray =  Object.values(projectList).flat();
// console.log(flattenedItemArray);
//display project list
  //get reference to myProjects in HTML
  let myProjects = document.querySelector('.myProjects');

  function displayProjects() {
    let projectNameArray = Object.keys(projectList);
    let itemArray = Object.values(projectList);
    console.log(itemArray); 

    for (let i = 0; i < projectNameArray.length; i++) {
      let newProject = document.createElement('li');
      let removeProjectBtn = document.createElement('button');
      let projectTitle= document.createElement('div');
      let listOfTodoItems = document.createElement('ul');

      projectTitle.textContent = projectNameArray[i];
      //call the displayItem function here 
      console.log(itemArray[i]);
      displayItems(itemArray[i], listOfTodoItems, projectList);
      console.log(projectList);

      myProjects.appendChild(newProject);
      newProject.appendChild(projectTitle);
      // removeProjectBtn
      newProject.appendChild(listOfTodoItems);

      //remove projects logic 
      removeProjectBtn.textContent = 'Remove';
      newProject.appendChild(removeProjectBtn);

      let projectIndex = projectNameArray.indexOf(newProject);
      removeProjectBtn.addEventListener('click', (e) => {
        //need to operate on the projectList object and remove the key/value pair within the object
        // let projectKey = projectNameArray[i];
        console.log(projectTitle);
        delete projectList[projectTitle.textContent];
        console.log(projectList);
        projectNameArray.splice(projectIndex, 1);
        myProjects.removeChild(newProject);
        console.log(projectList);
      })
    }
  }

  displayProjects();
  addPopupFunctionToNewEditBtnsAndRemoveExistingItem();

item.detail();

document.querySelector('.submit-btn').addEventListener('click', ()=>{
  addNewItem(projectList, '#item-popup', '');
  console.log(projectList);
  //remove child elements from DOM for projects
  myProjects.replaceChildren();
  displayProjects();
  console.log(projectList);
  addPopupFunctionToNewEditBtnsAndRemoveExistingItem();
}  );

//create similar code above next
document.querySelector('.submit-edits').addEventListener('click', ()=>{
  addNewItem(projectList, '#edit-popup', 'edit-');
  console.log(projectList);
  myProjects.replaceChildren();
  displayProjects();
  console.log(projectList);
  addPopupFunctionToNewEditBtnsAndRemoveExistingItem();
})

//call the project popup modal on click

let popup = createPopup('#item-popup');
document.querySelector('#open-item-popup').addEventListener('click', popup);

let removeBtnList = document.querySelectorAll('.remove');

//call the edit detailpopup modal on click

let editPopup = createPopup('#edit-popup');
let listOfEditBtns = document.querySelectorAll('.open-edit-popup');
// console.log(listOfEditBtns[0]);//get the actual value of button.open-edit-popup

let titleProjectRef;

//add event listener to each of the buttons in listOfEditBtns
function addPopupFunctionToNewEditBtnsAndRemoveExistingItem(){
  let scopedListOfEditBtns = document.querySelectorAll('.open-edit-popup');
  for(let i = 0; i < scopedListOfEditBtns.length ; i++) {
  scopedListOfEditBtns[i].addEventListener('click', () => {
  console.log(scopedListOfEditBtns[i].getAttribute('project-item'));
  
    let title = document.querySelector('#edit-title');
    let description = document.querySelector('#edit-description');
    let dueDate = document.querySelector('#edit-duedate');
    let priority = document.querySelector('#edit-priority');
    let projectName = document.querySelector('#edit-project');

  let btnIdentifier = scopedListOfEditBtns[i].getAttribute('project-item');

  //use for in loop for the projectList object to access each item for edit
    for (let project in projectList) {
      for (let i = 0; i < projectList[project].length; i++ ) {
        if (projectList[project][i].identifier === btnIdentifier) {
          // fill the popup with existing data
      title.value = projectList[project][i].title;
      description.value = projectList[project][i].description;
      dueDate.value = projectList[project][i].dueDate;
      priority.value = projectList[project][i].priority;
      projectName.value = projectList[project][i].project;
      
      //remove the selected item from ProjectList
      projectList[project].splice(i, 1);

        }
      }
    }
  editPopup();
})
}

}

//detects whether localStorage is both supported and available
if(storageAvailable('localStorage')) {
  console.log('available');
}else {
  console.log('storage not available')
}
