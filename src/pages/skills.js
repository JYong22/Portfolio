
import Java from '../images/java.png';
import Html from '../images/html.png';
import Css from '../images/css.png';
import Js from '../images/js.png';
import Rlogo from '../images/react.png'
import MSql from '../images/Mysql.png'

import '../css/skills.css';

function SkillsCard(props){
    return(
        <div className = {props.className1}>
            <img className = {props.className2} src ={props.src} alt = {props.alt}/>
            <div className = {props.className3}>
                {props.alt}
            </div>
            
        </div>
    );
}
function Skills(){
    return(
        <div id = 'skills'>
            <div id = 'skills-title'>
                <div id = 'skills-title1'>
                    My
                </div>
                <div id = 'skills-title2'>
                    Skills
                </div>
            </div>
            <div id = 'sCard-container'>
                
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Java} alt = "Java"/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Html} alt = 'HTML'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2-1" src = {Css} alt = 'CSS'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2-1" src = {Js} alt = 'Javascript'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Rlogo} alt = 'React'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {MSql} alt = 'MySQL'/>
            </div>
        </div>
    );
}

export default Skills;