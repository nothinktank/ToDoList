//item class for to do items duplication
export default class Item {
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