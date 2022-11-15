// import loadash, js files and images
import _ from 'lodash';

// import css styles 
import '../css/index.css';

// impoer modules 
import  "./form";
import "./submit";

// import images 
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import buzzCity from '../images/buzz-city.png';

// import bootstrap npm modules 
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import initDb function 
import { initdb } from './database';


// add images on load
window.addEventListener('load', function () {
  initdb();
  document.getElementById('logo').src = buzzCity;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());

  