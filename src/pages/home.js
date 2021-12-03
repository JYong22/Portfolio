import React from "react";
import Header from './headerBar';
import linkedIn from '../images/linkedin.png';
import github from '../images/github.png';

import '../css/stars.css';
import '../css/home.css';



function Home(){
    return(
        <div id = 'home'>
                <Header className = "hover-underline-white"/>
            
                <div id = 'home-welcome'>
                    <div id = 'home-welcome1'>
                       Johnson Yong
                    </div>

                    <div id = 'home-welcome2'>
                        Software Engineer Student
                    </div>

                    <div id = "home-social">
                        <div id = "home-social-linkedin" >
                            <img id = "home-social-linkedin1" src = {linkedIn} alt = 'linkedin'/>
                        </div>
                        <div id = "home-social-github" class = 'home-github'>
                            <img id = "home-social-github1" src = {github} alt = 'linkedin'/>
                        </div>

                    </div>
                </div>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
        </div>
    );

}

export default Home;