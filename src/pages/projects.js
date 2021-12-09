import React from 'react';
import '../css/projects.css';
import links from '../links/links.json';



function ProjectCard(props){ //project cards not being used currently
    return(
        <div className = {props.className}>
            <div className = {props.className + '1'}>
                <div className = {props.className + "2"}>
                </div>
                <div className = {props.className + "2"}>
                </div>
            </div>
        </div>
    );
}


function ProjectLink(props){
    return(
        <div>
            <a className = {props.a} href = {props.href}>
                <div className = {props.className}>
                    {props.text}
                </div>
            </a>
        </div>
    );
}

class Projects extends React.Component{
    handleScroll(e){
        let element = e.target
        console.log(element);
    }

    render(){
        return(
                <div>
                    <div id = 'project'>
                        <div id = 'project-title'>
                            <div id = 'project-title1'>
                            My
                            </div>
                            <div id = 'project-title2'>
                            Projects
                            </div>
                        </div>
                    </div>
                    <div id = 'project-instructions'>
                        Scroll in black box to see projects.

                    </div>
                    <div id = 'project1-1'>
                        <ProjectLink a = 'aLink' className = 'project-link' text = 'Github' href = {links.github}/>
                        <div id = 'project1-2'>
                            <div id = "pCards-container1-1">
                                <canvas id = "pCards-container1-2">
                                    
                                </canvas>
                            </div>
                        </div>
                    </div>
                    <div id = 'project2-1'>
                        <ProjectLink a = 'aLink' className = 'project-link' text = 'Github' href = {links.github}/>
                        <div id = 'project2-2'>
                            <div id = "pCards-container2-1">
                                <canvas id = "pCards-container2-2">
                                    
                                </canvas>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Projects;

