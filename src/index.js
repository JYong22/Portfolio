import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pro1 from './animation/project1';
import pro2 from './animation/project2';
import pro3 from './animation/project3';
import pro4 from './animation/project4';
import stickyNav from './animation/stickynavbar';
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.render(

    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>

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

//THIS IS THE Third PROJECT
pro3();
//

//THIS IS THE Third PROJECT
pro4();
//