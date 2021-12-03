import '../css/contact.css';

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
                    <div className = 'contact-info1'>
                        <div className = 'contact-info1-1'>
                            Email
                        </div>
                    </div>
                    <div className = 'contact-info1'>
                        <div className = 'contact-info1-1'>
                            LinkedIn
                        </div>
                    </div>
                    <div className = 'contact-info1'>
                        <div className = 'contact-info1-1'>
                            Github
                        </div>
                    </div>
                </div>
                <div id = 'contact-form'>
                <form action="mailto:someone@example.com" method="post" enctype="text/plain">
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
            </div>
        </div>
    )
}

export default Contact;