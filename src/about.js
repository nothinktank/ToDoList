//function that creates a div element that contains the information about the restaurant
export function renderRestaurantInfo() {
  const infoDiv = document.createElement('div');
  infoDiv.textContent = 'our restaurant cooks bigs for breakfast lunch and dinner';

  const contentDiv = document.querySelector('#content');

  contentDiv.appendChild(infoDiv);

}