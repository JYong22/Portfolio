import '../css/contact.css';

import Gmail from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';

import links from '../links/links.json';

function ContactCard(props){
    return(
        <div className = {props.className}>
            <a className = {props.a} href = {props.href}>
            <div className = {props.className3}>
                <div>
                    <img src = {props.src} alt = {props.alt} className = {props.className1}/>
                </div>
                <div className = {props.className2} >
                    {props.text}                
                </div>
            </div>
            </a>
        </div>
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
        <div id = 'contact'>
            <div id = 'contact-title'>
                <div id = 'contact-title1'>
                    Contact
                </div>
                <div id = 'contact-title2'>
                    Me
                </div>
            </div>
            <div id = 'contact-container'>
                <div id = 'contact-info'>
                    <ContactCard className3 = 'contact-infox' className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Gmail} alt = 'Gmail' text = 'JohnsonYong0901@gmail.com'/>
                    <ContactCard a = 'aLink2' className3 = 'contact-infox' className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Linkedin} alt = 'Linkedin' text = 'Linkedin' href = {links.linkedin}/>
                    <ContactCard a = 'aLink2' className3 = 'contact-infox' className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Github} alt = 'Github' text = 'Github' href = {links.github}/>
                </div>
            </div>
        </div>
    )
}

export default Contact;