//item class for to do items duplication
export class Item {
  constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

    detail(){
      console.log(`this item is ${this.title}`);
    }


  }

  export function addNewItem(projectList) {
    let popupNode = document.querySelector('#item-popup');
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let dueDate = document.querySelector('#dueDate');
    let priority = document.querySelector('#priority');
    let project = document.querySelector('#project');
    

    //if title field is not blank then initialize a new item using item class
    //check if it matches any existing project, if it does, then push this item to that object
    //if project field doesn't match with any existing project, create a new project and add
    //the item to the created project

    if (title.value){
      let newItem = new Item(title.value, description.value, dueDate.value, priority.value, project.value)
      console.log(newItem);
    }
  }