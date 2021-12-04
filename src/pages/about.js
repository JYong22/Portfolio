import React from "react";
import '../css/about.css';
import Me from '../images/me.jpeg';

import Header from './headerBar';


function About(props){
    return(
        <div>
            <Header className = "hover-underline-white"/>
            <div id = 'about'>

                <div id = 'about-gradient'>
                    <div id = 'about-background'>
                        <div id = 'about-header'>
                            <div id = 'about-header1'>
                                About
                            </div>
                            <div id = 'about-header2'>
                                Me
                            </div>
                        </div>
                        <div id = 'about-content'>
                            <div id = 'about-content-image'>
                                <img id = 'about-content-image1' src = {Me} alt="Me"/>
                            </div>
                            <div id = 'about-content-text'>
                                <div id = 'about-content-text1'>
                                    <div id = 'about-content-text1-1'>
                                        Hello, 
                                    </div>
                                    <div id = 'about-content-text1-2'>
                                        I'm Johnson
                                    </div>
                                </div>
                                <br/>
                                <div id = 'about-content-text2'>
                                    I'm currently a third year software engineering student studying at Western University. My goal this year is to seek a software engineering internship with an interest in web development.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default About;