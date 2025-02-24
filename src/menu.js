//function that contains the menu of the restaurant
export function renderMenu(){
  const menuDiv = document.createElement('div');

  menuDiv.textContent = 'we serve power forwards and centers as entrees';

  const contentDiv = document.querySelector('#content');
  contentDiv.appendChild(menuDiv);
}