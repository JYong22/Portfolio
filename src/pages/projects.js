import '../css/projects.css';

function ProjectCard(props){
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

function Projects(){
    return(
        <div id = 'project'>
            <div id = 'project-title'>
                <div id = 'project-title1'>
                My
                </div>
                <div id = 'project-title2'>
                Projects
                </div>
            </div>
            <div id = "pCards-container">
                <ProjectCard className = "project-cards"/>
                <ProjectCard className = "project-cards"/>
            </div>
        </div>
    );
}
export default Projects;