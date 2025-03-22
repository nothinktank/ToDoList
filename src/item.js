//item class for to do items duplication

export class Item {
  constructor(title, description, dueDate, priority, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.identifier = `${project} ${title}` 
  }

    detail(){
      console.log(`this item is ${this.title}`);
    }


  }

  export function addNewItem(projectList, typeOfPopup, edit) {
    // let popupNode = document.querySelector('#item-popup');
    let popupNode = document.querySelector(typeOfPopup);
    let title = document.querySelector( `#${edit}title`);
    let description = document.querySelector(`#${edit}description`);
    let dueDate = document.querySelector(`#${edit}duedate`);
    let priority = document.querySelector(`#${edit}priority`);
    let project = document.querySelector(`#${edit}project`);

    //if title field is not blank then initialize a new item using item class
    if (title.value){
      let newItem = new Item(title.value, description.value, dueDate.value, priority.value, project.value)
      console.log(newItem);
    
      let projectNameArray = Object.keys(projectList);
      if (projectNameArray.includes(project.value)){ //if the item project name already exists
        for (let i = 0; i < projectNameArray.length; i++) { 
          if (project.value === projectNameArray[i]){ //find the name of the existing project in projectList
            let matchingProjectName = project.value;
            projectList[matchingProjectName].push(newItem);//add newItem to the project value array
             }
          }
        } else { //when includes() returns false
          let newProjectName = project.value; //assign user input project name 
          projectList[newProjectName] = [newItem]; //add new project as key-value pair to projectList object
        }
    }

    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = '';
    project.value = '';

    popupNode.classList.remove('active');
  }

  

  

  //display item function
  //this function takes an array of objects(todo items) as an argument to display the item elements in it
  export function displayItems(projectItemArray, itemList, projectList) {
    // let itemArray = Object.values(projectList);

    for (let i = 0; i < projectItemArray.length; i ++){
      let item = document.createElement('li');
      let itemRemoveBtn = document.createElement('button');
      let itemTitle = document.createElement('div');
      let itemDescription = document.createElement('div');
      let itemDueDate = document.createElement('div');
      let itemPriority = document.createElement('div');
      let editItemBtn = document.createElement('button');
    
    //attach object directly to the element
    // item.projectItemArray[i] = projectItemArray[i];

      let itemProject = document.createElement('div');
      let projectName = projectItemArray[i].project;
      console.log(projectName);
      
      itemList.appendChild(item);
      console.log(`this is logging item number ${i}`)
      
      itemTitle.textContent =`Title: ${projectItemArray[i].title}` ;
      itemTitle.setAttribute('project-item', `${projectName} ${projectItemArray[i].title}`);
      item.appendChild(itemTitle);

      itemDescription.textContent = `Description: ${projectItemArray[i].description}`;
      item.appendChild(itemDescription);

      itemDueDate.textContent = `Due: ${projectItemArray[i].dueDate}`;
      item.appendChild(itemDueDate);

      itemPriority.textContent = `Priority: ${projectItemArray[i].priority}`;
      item.appendChild(itemPriority);

      itemProject.textContent = `Project: ${projectItemArray[i].project}`;
      item.appendChild(itemProject);

      //update style for each to do item attribute

      itemRemoveBtn.textContent = 'Remove';
      itemRemoveBtn.classList.add('remove');
      item.appendChild(itemRemoveBtn);

      

      //edit item logic
      //need to reference the item object to implement the functionality to all the edit buttons
      editItemBtn.textContent = 'Edit';
      editItemBtn.classList.add('open-edit-popup');
      console.log(projectItemArray[i].title);
      editItemBtn.setAttribute('project-item', `${projectName} ${projectItemArray[i].title}`);
      item.appendChild(editItemBtn);

      //remove item logic
      let btnIdentifier = editItemBtn.getAttribute('project-item');
      let itemIndex = projectItemArray.indexOf(item);
      itemRemoveBtn.addEventListener('click', (e) => {
        for (let project in projectList) {
          for (let i = 0; i < projectList[project].length; i++) {
            if(projectList[project][i].identifier === btnIdentifier) {
              projectList[project].splice(i, 1);
              // console.log(projectList)
            }
          }
        }


        // projectItemArray.splice(itemIndex, 1);
        itemList.removeChild(item);
        // console.log(projectList);
      })
      
    }
  }
  


  export function editItem(projectList, titleProjectRef){
   
    //decide which popup from the template.html file
    let popupNode = document.querySelector('#edit-popup');
    //reference each field
    let title = document.querySelector('#edit-title');
    let description = document.querySelector('#edit-description');
    let dueDate = document.querySelector('#edit-duedate');
    let priority = document.querySelector('#edit-priority');
    let project = document.querySelector('#edit-project');

     //find reference to item in project list using data-attribute
     

      }

    