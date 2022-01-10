
import Java from '../images/java.png';
import Html from '../images/html.png';
import Css from '../images/css.png';
import Js from '../images/js.png';
import Rlogo from '../images/react.png';
import MSql from '../images/Mysql.png';
import Nodejs from '../images/nodejs.png';
import { Heading,Text,Stack, Flex, Link, Box, Image } from '@chakra-ui/react';


import '../css/skills.css';

function SkillsCard(props){
    return(
        <Box className = {props.className1} 
        h = {['10vh','10vh','14vh']}
        w = {['30vw','30vw','17vw']}>
            <Image  src ={props.src} alt = {props.alt}
                boxSize={['10vw','10vw','4vw']}
                
                
                
            />
            <Box className = {props.className3}
            fontSize = {['2.5vw','2.5vw','1vw']}>
                {props.alt}
            </Box>
            
        </Box>
    );
}
function FakeSkillsCard(props){
    return(
        <Box className = {props.className1}>
            <Image  src ={props.src} alt = {props.alt}
                
                
            />
            <Box className = {props.className3}>
                {props.alt}
            </Box>
            
        </Box>
    );
}
function Skills(){
    return(
        <Box id = 'skills' marginTop = {['0vh','0vh','10vh']}>
            <Box id = 'skills-title' fontSize = {['7vw','5vw', '3vw']}>
                <Text id = 'skills-title1' color = 'white'>
                    My
                </Text>
                <Text id = 'skills-title2'>
                    Skills
                </Text>
            </Box>
            <div id = 'sCard-container'>
                
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Java} alt = "Java"/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Html} alt = 'HTML'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Css} alt = 'CSS'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Js} alt = 'Javascript'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Rlogo} alt = 'React'/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {MSql} alt = 'MySQL'/>
                <FakeSkillsCard/>
                <SkillsCard className1 = "skills-card" className2 = "skills-card1" className3 = "skills-card2" src = {Nodejs} alt = 'Nodejs'/>

            </div>
        </Box>
    );
}

export default Skills;