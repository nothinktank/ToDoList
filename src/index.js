import './style.css';
import {renderRestaurantInfo} from './about.js';
import {renderMenu} from './menu.js';
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