import '../css/contact.css';

import Gmail from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';
import links from '../links/links.json';

import { Heading,Text,Stack, Flex, Link, Box, Image } from '@chakra-ui/react';


function ContactCard(props){
    return(
        <Box className = {props.className}>
            <a className = {props.a} href = {props.href}>
            <Box className = {props.className3}>
                <Box>
                    <Image src = {props.src} alt = {props.alt} className = {props.className1}/>
                </Box>
                <Box className = {props.className2} >
                    {props.text}                
                </Box>
            </Box>
            </a>
        </Box>
    );
}

function ContactForm(props){
    return(
        <div id = 'contact-form'>
             <form action="mailto:@gmail.com" method="post" enctype="text/plain">
                Name:<br/>
                <input class = 'contact-input'type="text" name="name"/><br/>
                E-mail:<br/>
                <input class = 'contact-input' type="text" name="mail"/><br/>
                Comment:<br/>
                <input id = 'contact-comment' type="text" name="comment" size="50"/><br/><br/>
                <input class = 'contact-button' type="submit" value="Send"/>
                <input class = 'contact-button' type="reset" value="Reset"/>
            </form>
        </div>
    );
}

function Contact(){

    return(
        <Box id = 'contact' h = {['35em','40vh','110vh']} >
            <Box id = 'contact-title'
            fontSize = {['7vw','5vw', '3vw']}>
                <Text id = 'contact-title1'
                color = 'white'>
                    Contact
                </Text>
                <Text id = 'contact-title2'>
                    Me
                </Text>
            </Box>
            <div id = 'contact-container'>
                <div id = 'contact-info'>
                    <ContactCard className3 = 'contact-infox' className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Gmail} alt = 'Gmail' text = 'JohnsonYong0901@gmail.com'/>
                    <ContactCard a = 'aLink2' className3 = 'contact-infox' className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Linkedin} alt = 'Linkedin' text = 'Linkedin' href = {links.linkedin}/>
                    <ContactCard a = 'aLink2' className3 = 'contact-infox' className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Github} alt = 'Github' text = 'Github' href = {links.github}/>
                </div>
            </div>
        </Box>
    )
}

export default Contact;