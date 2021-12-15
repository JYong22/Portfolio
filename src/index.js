import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pro1 from './animation/project1';
import pro2 from './animation/project2';
import stickyNav from './animation/stickynavbar';


ReactDOM.render(

    <React.StrictMode>
      <App />

    </React.StrictMode>,

  document.getElementById('root')
);

stickyNav();


//THIS IS THE FIRST PROJECT
pro1();
//

//THIS IS THE SECOND PROJECT
pro2();
//