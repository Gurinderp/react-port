import React from "react";

function Contact() {
    return (
    <body>
       <div>
    <div class="box">
        <div id="content">
            <section id="aboutme">
                Contact
            </section>
<hr />
            <section id="contactbody">
                <div class="contactinfo">
                <p>
                <label>Name</label>
                <br />
                <input type ="text"
                        id ="contact_name"/>
                </p>
                </div>
                <div class="contactinfo">
                <p>
                    <label>Email</label>
                    <br />
                    <input type="text"
                            id="email"/>
                </p>
                </div>
                <div class="contactinfo">
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
</div>
</body>
    );
}

export default Contact;