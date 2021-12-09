import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WhiteOut from './images/whiteBackground.png';
import pro1 from './animation/project1';
import pro2 from './animation/project2';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");

  }
}


//THIS IS THE FIRST PROJECT
pro1();
//

//THIS IS THE SECOND PROJECT
pro2();
//