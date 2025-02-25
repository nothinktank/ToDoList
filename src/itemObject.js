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


  // const infoDiv = document.createElement('div');
  // infoDiv.textContent = 'our restaurant cooks bigs for breakfast lunch and dinner';

  // const contentDiv = document.querySelector('#content');

  // contentDiv.appendChild(infoDiv);

}