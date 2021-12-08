import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WhiteOut from './images/Project1/whiteBackground.png';

function importAll(r) { //renders all images into a json object
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images/Project1/project1animation', false, /\.(png|jpe?g|svg)$/)); //images

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log(  images['an1.png'].default);


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



const div = document.getElementById('project1-2'); //scroll container
const canvas = document.getElementById("pCards-container1"); //canvas for image container
const context = canvas.getContext("2d"); //setcontext to 2d

const frameCount = 57; //all image counts
const currentFrame = index => ( //if current frame changes then change image
  images[`an${index}.png`].default
)


//preload images before updating
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};
//new images
const img = new Image()
const img1 = new Image(); 

img1.src = WhiteOut;
img.src = currentFrame(1);
canvas.width= 3050
canvas.height=1050;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

//update image
const updateImage = index => {
  context.opacity = 1;
  img.src = currentFrame(index);
  context.drawImage(img1, 0, 0); //white background to clear canvas
  setTimeout(500);
  context.drawImage(img, 0, 0); //draw image
}

div.addEventListener('scroll', () => {   //on div scroll
  const scrollTop = div.scrollTop; //div top

  const maxScrollTop = div.scrollHeight- div.clientHeight; //scrollheight - clientheight gives the max scroll
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount) 
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

