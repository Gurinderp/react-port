import React from "react";

function Contact() {
    return (       
<div className="container">
<div>
    <div className="box">
        <div id="content">
            <section id="aboutme">
                Contact
            </section>
<hr />
            <section id="contactbody">
                <div className="contactinfo">
                <p>
                <label>Name</label>
                <br />
                <input type ="text"
                        id ="contact_name"/>
                </p>
                </div>
                <div className="contactinfo">
                <p>
                    <label>Email</label>
                    <br />
                    <input type="text"
                            id="email"/>
                </p>
                </div>
                <div className="contactinfo">
                <p>
                    <label>Message</label>
                    <br />
                    <input type="text"
                            id="message"/>
                </p>
            </div>
            <div id="button">
            <button type="button">Submit</button>
            </div>
            </section>
        </div>
    </div>
    <footer className="clearfix">
        <p>Copyright &#x24B8</p>
    </footer>
</div>
</div>
    );
}

export default Contact;