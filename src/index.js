import './style.css';
import {Item, addNewItem, displayItems, displayItem} from './item.js';
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

  
  //load projectList from local storage





  let projectList = {};
  // generalProject.toDoItems.push('set up object name check during adding items');
  //display all projects
  
// let flattenedItemArray =  Object.values(projectList).flat();
// console.log(flattenedItemArray);
//display project list
  //get reference to myProjects in HTML
  let myProjects = document.querySelector('.myProjects');

  function displayProjects() {
    myProjects.replaceChildren();
    //get the number of item stored in local storage
    let numberOfItemInStorage = localStorage.length;
    

    let projectNameArray = Object.keys(projectList);
    let itemArray = Object.values(projectList);
    let projectIdArray = [];
    console.log(itemArray); 

//need to find all unique project names and populate all items with the same project name once
for (let k = 0; k< numberOfItemInStorage; k++) {
  let retrievedItemKey = localStorage.key(k);
  let retrievedItemValue = localStorage.getItem(retrievedItemKey);
  let parsedItem = JSON.parse(retrievedItemValue);
  let projectId = parsedItem.project;
  
  if (!projectIdArray.includes(projectId)){
    projectIdArray.push(projectId);
    //projectIdArray is an array of unique project names
  }
}
console.log(`projectIdArray is ${projectIdArray}`)//list the projects that needed to be displayed

 //create the dom elements for the projects
 //need to have title, remove button and a ul for each project, ul is for attaching items
    for (let i = 0; i < projectIdArray.length; i++) {

      
      //   let retrievedItemKey = localStorage.key(i);
      // //use the retrieved item key to get item value
      //   let retrievedItemValue = localStorage.getItem(retrievedItemKey);
      // //parse the item value
      //   let parsedItem = JSON.parse(retrievedItemValue);

      let newProject = document.createElement('li');
      let removeProjectBtn = document.createElement('button');
      let projectTitle= document.createElement('div');
      let listOfTodoItems = document.createElement('ul');

      projectTitle.textContent = projectIdArray[i];
      
      // displayItems(parsedItem.project, listOfTodoItems, projectList);//display item separately

      //for each project, find all items that has the same project name and display them
      //save project id as a variable
      

        for (let p = 0; p < numberOfItemInStorage; p++){
          let retrievedItemKey = localStorage.key(p);
          let retrievedItemValue = localStorage.getItem(retrievedItemKey);
          let parsedItem = JSON.parse(retrievedItemValue);

          //find items under the project name === projectIdArray[i]
          if (parsedItem.project === projectIdArray[i]){
            displayItem(parsedItem, listOfTodoItems, retrievedItemKey);
          }
        }
      

      myProjects.appendChild(newProject);
      newProject.appendChild(projectTitle);
      // removeProjectBtn
      newProject.appendChild(listOfTodoItems);

      //remove projects logic 
      //add attribute to removeProject button, the attribute would be the project name
      removeProjectBtn.textContent = 'Remove';
      removeProjectBtn.setAttribute('nameOfProject', projectIdArray[i]);
      newProject.appendChild(removeProjectBtn);

      let projectIndex = projectIdArray.indexOf(newProject);
      removeProjectBtn.addEventListener('click', (e) => {
        //need to operate on the projectList object and remove the key/value pair within the object

        delete projectList[projectTitle.textContent]; //check if i still need to reference projectList
        removeItemsUnderProject(projectIdArray[i]);
        projectIdArray.splice(projectIndex, 1); //remove the project from the unique project name array
        myProjects.removeChild(newProject); 
        
        //needs to remove all the items under the removed project local storage
      })
    }
  }
//a removeProject function that removes the items under the project from localStorage
  function removeItemsUnderProject(projectTitle) {
    for(let [key, value] of Object.entries(localStorage)){
      let parsedValue = JSON.parse(value);
      if (projectTitle === parsedValue.project){
        localStorage.removeItem(key);
      }
    }
    
  }

  displayProjects();
  addPopupFunctionToNewEditBtnsAndRemoveExistingItem();
  addCompletionCheckmarkFunctionToEachItem();

document.querySelector('.submit-btn').addEventListener('click', ()=>{
  addNewItem(projectList, '#item-popup', '');
  console.log(projectList);
  //remove child elements from DOM for projects
  myProjects.replaceChildren();
  displayProjects();
  addPopupFunctionToNewEditBtnsAndRemoveExistingItem();
  addCompletionCheckmarkFunctionToEachItem()
  console.log(projectList);
  
}  );

//create similar code above next
document.querySelector('.submit-edits').addEventListener('click', ()=>{
  addNewItem(projectList, '#edit-popup', 'edit-');
  console.log(projectList);
  myProjects.replaceChildren();
  displayProjects();
  addPopupFunctionToNewEditBtnsAndRemoveExistingItem();
  addCompletionCheckmarkFunctionToEachItem()
  console.log(projectList);
  
})

//call the project popup modal on click

let popup = createPopup('#item-popup');
document.querySelector('#open-item-popup').addEventListener('click', popup);

let removeBtnList = document.querySelectorAll('.remove');

//call the edit detailpopup modal on click

let editPopup = createPopup('#edit-popup');
let listOfEditBtns = document.querySelectorAll('.open-edit-popup');
// console.log(listOfEditBtns[0]);//get the actual value of button.open-edit-popup


//add event listener to each of the buttons in listOfEditBtns
function addPopupFunctionToNewEditBtnsAndRemoveExistingItem(){
  let scopedListOfEditBtns = document.querySelectorAll('.open-edit-popup');
  for(let i = 0; i < scopedListOfEditBtns.length ; i++) {
  scopedListOfEditBtns[i].addEventListener('click', () => {
  
  
    let title = document.querySelector('#edit-title');
    let description = document.querySelector('#edit-description');
    let dueDate = document.querySelector('#edit-duedate');
    // let priority = document.querySelector('#edit-priority');
    let priority = document.querySelector(`input[name="edit-priority"]`)
    let projectName = document.querySelector('#edit-project');

  let btnIdentifier = scopedListOfEditBtns[i].getAttribute('project-item');

  let numberOfStoredItems = localStorage.length;
    //for loop to access the item with a matching attribute
    if(numberOfStoredItems > 0){
      for (let i = 0; i < numberOfStoredItems; i++) {
        let retrievedItemKey = localStorage.key(i);
        let retrievedItemValue = localStorage.getItem(retrievedItemKey);
        let parsedItem = JSON.parse(retrievedItemValue);
        // console.log(parsedItem.identifier);
    // console.log(JSON.parse(localStorage.getItem(localStorage.key(0))));
    if (parsedItem.identifier === btnIdentifier){
      //restricted title and project for editing existing items


      title.value = parsedItem.title;
      projectName.value = parsedItem.project;

      description.value = parsedItem.description;
      dueDate.value = parsedItem.dueDate;
      priority.value = parsedItem.priority;

      // let radioBtn = document.querySelector('')

    
      //testing my theory, return the parsedItem.identifier 

    //remove existing item
      // localStorage.removeItem(localStorage.key(i));
    }
    }
    }
  
  //use for in loop for the projectList object to access each item for edit
    // for (let project in projectList) {
    //   for (let i = 0; i < projectList[project].length; i++ ) {
    //     if (projectList[project][i].identifier === btnIdentifier) {
    //       // fill the popup with existing data
    //   title.value = projectList[project][i].title;
    //   description.value = projectList[project][i].description;
    //   dueDate.value = projectList[project][i].dueDate;
    //   priority.value = projectList[project][i].priority;
    //   projectName.value = projectList[project][i].project;
      
    //   //remove the selected item from ProjectList
    //   projectList[project].splice(i, 1);

    //     }
    //   }
    // }
  editPopup();
})
}
}
// let listOfCheckmarks = document.querySelectorAll('.checkmark');
// console.log(listOfCheckmarks);
//add an onclicklistener to all listed completion checkmarks
function addCompletionCheckmarkFunctionToEachItem() {
  let listOfCheckmarks = document.querySelectorAll('.checkmark');


  for (let i = 0; i < listOfCheckmarks.length; i++) {
    listOfCheckmarks[i].addEventListener('click', () => {
      let completionBtnIdentifier = listOfCheckmarks[i].getAttribute('item-key');
      // console.log(completionBtnIdentifier)
      let numberOfStoredItems = localStorage.length;
    //for loop to access the item with a matching attribute
    if(numberOfStoredItems > 0){
      for (let k = 0; k < numberOfStoredItems; k++){
        let retrievedItemKey = localStorage.key(k);
        let retrievedItemValue = localStorage.getItem(retrievedItemKey);
        let parsedItem = JSON.parse(retrievedItemValue);
        if (parsedItem.identifier === completionBtnIdentifier){
          if (!parsedItem.isComplete){
            parsedItem.isComplete = true;//set item to complete
            localStorage.setItem(retrievedItemKey, JSON.stringify(parsedItem)); //save completion status
            listOfCheckmarks[i].style.color = 'lightgreen';
              // listOfCheckmarks[i].classList.remove('checkmark-incomplete');
              // listOfCheckmarks[i].classList.add('checkmark-complete');
          }else {
            parsedItem.isComplete = false;//set item to incomplete
            localStorage.setItem(retrievedItemKey, JSON.stringify(parsedItem));//save completion status
            listOfCheckmarks[i].style.color = 'gray';
              // listOfCheckmarks[i].classList.remove('checkmark-complete');
              // listOfCheckmarks[i].classList.add('checkmark-incomplete');
          }
console.log(parsedItem.isComplete);
            //find the completion boolean and change it
        }
      }
    }
  }
    )
  }
}

//detects whether localStorage is both supported and available
if(storageAvailable('sessionStorage')) {
  console.log('available');
}else {
  console.log('storage not available')
}



// bug- remove an entire project is not removing the item in local storage