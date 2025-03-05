export class Project {
  constructor (name, priority){
    this.name = name;
    this.priority = priority;
    this.toDoItems = [];
  }

  // toDoItems = [];
}

// export function addNewProject(projectList){
//     let popupNode = document.querySelector('#project-popup');
//     let name = document.querySelector('#name');
//     let priority = document.querySelector('#priority');
    
//     if (name.value) {
//       let newProject = new Project(name.value, priority.value);
//       projectList.push(newProject);
//       // this.displayBook(nb);

//     name.value = '';
//     priority.value = '';
  
//     popupNode.classList.remove('active');
//   }
// }