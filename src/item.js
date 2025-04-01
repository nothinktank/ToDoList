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
    //if edit is not blank in the input, need to remove the previous record, or overwrite the previous record

    let popupNode = document.querySelector(typeOfPopup);
    let title = document.querySelector( `#${edit}title`);
    let description = document.querySelector(`#${edit}description`);
    let dueDate = document.querySelector(`#${edit}duedate`);
    let priority = document.querySelector(`#${edit}priority`);
    let project = document.querySelector(`#${edit}project`);
    
if (edit === 'edit-'){
  let editedItem = new Item(title.textContent, description.value, dueDate.value, priority.value, project.textContent);
  localStorage.setItem(editedItem.identifier, JSON.stringify(editedItem));

        // title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '';
        // project.value = '';
}else {
  if(!title.value || !project.value){
     return alert('you need at least a title and a project name to submit a new item!');
  }else if (title.value && project.value){//if title field is not blank then initialize a new item using item class
    let newItem = new Item(title.value, description.value, dueDate.value, priority.value, project.value)
    localStorage.setItem(`${project.value} ${title.value}`, JSON.stringify(newItem));
  
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
  //reset each field after items are added
        title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '';
        project.value = '';
      }
    popupNode.classList.remove('active');
  }

  export function displayItems(nameOfProject, itemList, projectList) {
    let numberOfItemInStorage = localStorage.length;

    for (let i = 0; i < numberOfItemInStorage; i++){
      //retrieve item key
      let retrievedItemKey = localStorage.key(i);
      //use the retrieved item key to get item value
      let retrievedItemValue = localStorage.getItem(retrievedItemKey);
      //parse the item value
      let parsedItem = JSON.parse(retrievedItemValue);

      //if project name === argument projectName, then list the item 
        if (parsedItem.project === nameOfProject) {
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
      let projectName = parsedItem.project;
      console.log(projectName);
      
      itemList.appendChild(item);
      console.log(`this is logging item number ${i}`)
      
      itemTitle.textContent =`Title: ${parsedItem.title}` ;
      itemTitle.setAttribute('project-item', `${projectName} ${parsedItem.title}`);
      item.appendChild(itemTitle);

      itemDescription.textContent = `Description: ${parsedItem.description}`;
      item.appendChild(itemDescription);

      itemDueDate.textContent = `Due: ${parsedItem.dueDate}`;
      item.appendChild(itemDueDate);

      itemPriority.textContent = `Priority: ${parsedItem.priority}`;
      item.appendChild(itemPriority);

      itemProject.textContent = `Project: ${parsedItem.project}`;
      item.appendChild(itemProject);

      //update style for each to do item attribute

      itemRemoveBtn.textContent = 'Remove';
      itemRemoveBtn.classList.add('remove');
      item.appendChild(itemRemoveBtn);

      

      //edit item logic
      //need to reference the item object to implement the functionality to all the edit buttons
      editItemBtn.textContent = 'Edit';
      editItemBtn.classList.add('open-edit-popup');
      // console.log(projectItemArray[i].title);
      editItemBtn.setAttribute('project-item', `${projectName} ${parsedItem.title}`);
      item.appendChild(editItemBtn);

      //remove item logic
      let btnIdentifier = editItemBtn.getAttribute('project-item');
      // let itemIndex = projectItemArray.indexOf(item);
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
  }

  //display 1 item 
  //input itemList for attaching the dom elements for individual item
  export function displayItem (parsedItemObjectFromStorage, itemList, retrievedItemKey){
      let item = document.createElement('li');
      let itemRemoveBtn = document.createElement('button');
      let itemTitle = document.createElement('div');
      let itemDescription = document.createElement('div');
      let itemDueDate = document.createElement('div');
      let itemPriority = document.createElement('div');
      let editItemBtn = document.createElement('button');

      let itemProject = document.createElement('div');
      let projectName = parsedItemObjectFromStorage.project; //need to take project name as a function input

      itemList.appendChild(item);
      
      itemTitle.textContent =`Title: ${parsedItemObjectFromStorage.title}` ;
      itemTitle.setAttribute('project-item', `${projectName} ${parsedItemObjectFromStorage.title}`);
      item.appendChild(itemTitle);

      itemDescription.textContent = `Description: ${parsedItemObjectFromStorage.description}`;
      item.appendChild(itemDescription);

      itemDueDate.textContent = `Due: ${parsedItemObjectFromStorage.dueDate}`;
      item.appendChild(itemDueDate);

      itemPriority.textContent = `Priority: ${parsedItemObjectFromStorage.priority}`;
      item.appendChild(itemPriority);

      itemProject.textContent = `Project: ${parsedItemObjectFromStorage.project}`;
      item.appendChild(itemProject);

      //update style for each to do item attribute

      itemRemoveBtn.textContent = 'Remove';
      itemRemoveBtn.classList.add('remove');
      item.appendChild(itemRemoveBtn);

      

      //edit item logic
      //need to reference the item object to implement the functionality to all the edit buttons
      editItemBtn.textContent = 'Edit';
      editItemBtn.classList.add('open-edit-popup');
      // console.log(projectItemArray[i].title);
      editItemBtn.setAttribute('project-item', `${projectName} ${parsedItemObjectFromStorage.title}`);
      item.appendChild(editItemBtn);

      //remove item logic
      let btnIdentifier = editItemBtn.getAttribute('project-item');
      // let itemIndex = projectItemArray.indexOf(item);
      itemRemoveBtn.addEventListener('click', (e) => {
        // for (let project in projectList) {
        //   for (let i = 0; i < projectList[project].length; i++) {
        //     if(projectList[project][i].identifier === btnIdentifier) {
        //       projectList[project].splice(i, 1);
        //       // console.log(projectList)
        //     }
        //   }
        // }
        // projectItemArray.splice(itemIndex, 1);
        //remove item from local storage
        localStorage.removeItem(retrievedItemKey);
        //remove dom element
        itemList.removeChild(item);
        // console.log(projectList);
      })
  }


  // export function editItem(projectList, titleProjectRef){
   
  //   //decide which popup from the template.html file
  //   let popupNode = document.querySelector('#edit-popup');
  //   //reference each field
  //   let title = document.querySelector('#edit-title');
  //   let description = document.querySelector('#edit-description');
  //   let dueDate = document.querySelector('#edit-duedate');
  //   let priority = document.querySelector('#edit-priority');
  //   let project = document.querySelector('#edit-project');

  //    //find reference to item in project list using data-attribute
     

  //     }

    