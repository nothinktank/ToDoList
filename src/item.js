//item class for to do items duplication

export class Item {
  constructor(title, description, dueDate, priority, project){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

    detail(){
      console.log(`this item is ${this.title}`);
    }


  }

  export function addNewItem(projectList) {
    let popupNode = document.querySelector('#item-popup');
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let dueDate = document.querySelector('#duedate');
    let priority = document.querySelector('#priority');
    let project = document.querySelector('#project');
    

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
  //maybe this can be a function in the Item class
  export function displayItems() {
    
  }