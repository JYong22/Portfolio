import React from 'react';





function Header(props){
    return(
        
        <div id = "navbar">
            <a href = '#about'>
                <div className = {props.className} id = 'navbar-about'>About</div>
            </a>
            <a href = '#project'>
                <div className = {props.className} id = 'navbar-projects'>Projects</div>
            </a>

            <a href = '#skills'>
                <div className = {props.className} id = 'navbar-skills'>Skills</div>
            </a>

            <a href = '#contact'>
                <div className = {props.className} id = 'navbar-contact' href = '#contact'>Contact</div>
            </a>
        </div>
    );
}

export default Header;