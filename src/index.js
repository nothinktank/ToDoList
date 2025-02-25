import './style.css';
import {Item} from './itemObject.js';
import {Project} from './projectObject.js';
import hardenImage from './chef.jpg';

const image = document.createElement('img');
image.src = hardenImage;
const div = document.querySelector('div');
const subHeader = document.createElement('header');

//nav buttons
const menuButton = document.querySelector('.menu');
const infoButton = document.querySelector('.about');
const homeButton = document.querySelector('.home');

function renderHome() {
  subHeader.textContent = 'best barbeque chicken in LA';
  subHeader.id = 'subHeader';

  div.appendChild(subHeader);
  div.appendChild(image); 
}
renderHome();

console.log('logging something for the restaurant');

const item = new Item('work on popup modal', 'add a popup modal for item detail', '3/1/2025','1' );
item.detail();






//set up nav button on-click events

menuButton.addEventListener('click', () => {
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }
  renderMenu();
})

infoButton.addEventListener('click', () => {
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }
  renderRestaurantInfo();
})

homeButton.addEventListener('click', () => {
  while(div.firstChild){
    div.removeChild(div.firstChild);
  }
  renderHome();
})