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
  //this function takes an array as an argument to display the item elements in it
  export function displayItems(projectItemArray, itemList) {
    for (let i = 0; i < projectItemArray.length; i ++){
      let item = document.createElement('li');
      let itemRemoveBtn = document.createElement('button');
      let itemTitle = document.createElement('div');
      let itemDescription = document.createElement('div');
      let itemDueDate = document.createElement('div');
      let itemPriority = document.createElement('div');
    
      
      itemList.appendChild(item);
      console.log(`this is logging item number ${projectItemArray[i]}`)
      
      itemTitle.textContent =`Title: ${projectItemArray[i].title}` ;
      item.appendChild(itemTitle);

      itemDescription.textContent = `Description: ${projectItemArray[i].description}`;
      item.appendChild(itemDescription);

      itemDueDate.textContent = `Due: ${projectItemArray[i].dueDate}`;
      item.appendChild(itemDueDate);

      itemPriority.textContent = `Priority: ${projectItemArray[i].priority}`;
      item.appendChild(itemPriority);

      //update style for each to do item attribute

      itemRemoveBtn.textContent = 'Remove';
      itemRemoveBtn.classList.add('remove');
      item.appendChild(itemRemoveBtn);

      //remove item logic
      let itemIndex = projectItemArray.indexOf(item);
      itemRemoveBtn.addEventListener('click', (e) => {
        projectItemArray.splice(itemIndex, 1);
        itemList.removeChild(item);
      })
    }
  }