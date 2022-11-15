// import loadash, js files and images
import _ from 'lodash';

// import css styles 
import '../css/index.css';

// impoer modules 
import  "./form";
// import "./submit";

// import images 
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import buzzCity from '../images/buzz-city.png';

// import bootstrap npm modules 
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import initDb function 
import { initdb, getDb, postDb } from './database';

// import fetchcards function from cards.js
import { fetchCards } from './cards';

// import form functions from form.js
import { toggleForm, clearForm } from './form';


// add images on load
window.addEventListener('load', function () {
  initdb();
  fetchCards();
  document.getElementById('logo').src = buzzCity;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

  // Form functionality
  const form = document.getElementById("formToggle");
  const newContactButton = document.getElementById("new-contact");
  let submitBtnToUpdate = false;
  let profileId;
  
  newContactButton.addEventListener('click', event => {
    toggleForm()
   })
  
  form.addEventListener('submit', event => {
    // Handle data
    event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;
  
    // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {
  
    fetchCards();
      // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }
  
  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
  });


function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());

  