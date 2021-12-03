import React from 'react';


function Header(props){
    return(
        <div id = "navbar">
            <div className = {props.className} id = 'navbar-home' href = '#home'>Home</div>
            <div className = {props.className} id = 'navbar-about' href = '#about'>About</div>
            <div className = {props.className} id = 'navbar-projects' href = '#projects'>Projects</div>
            <div className = {props.className} id = 'navbar-skills' href = '#skills'>Skills</div>
            <div className = {props.className} id = 'navbar-contact' href = '#contact'>Contact Me</div>

        </div>
    );
}

export default Header;