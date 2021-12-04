import '../css/contact.css';

import Gmail from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';

function ContactCard(props){
    return(
        <div className = {props.className}>
            <img src = {props.src} alt = {props.alt} className = {props.className1}/>
            <div className = {props.className2}>
                {props.text}
            </div>
        </div>
    );
}

function ContactForm(props){
    return(
        <div id = 'contact-form'>
             <form action="mailto:JohnsonYong0901@gmail.com" method="post" enctype="text/plain">
                Name:<br/>
                <input type="text" name="name"/><br/>
                E-mail:<br/>
                <input type="text" name="mail"/><br/>
                Comment:<br/>
                <input type="text" name="comment" size="50"/><br/><br/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset"/>
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
                    <ContactCard className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Gmail} alt = 'Gmail' text = 'JohnsonYong0901@gmail.com'/>
                    <ContactCard className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Linkedin} alt = 'Linkedin' text = 'Linkedin'/>
                    <ContactCard className = 'contact-info1' className1 = 'contact-info1-1' className2 = 'contact-info1-2' src = {Github} alt = 'Github' text = 'Github'/>
                </div>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact;