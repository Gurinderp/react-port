import React from "react";

function Resume() {
    return (
        <div>
            <section id="name">
                <h1>Gurinderpreet Singh</h1>
        </section>

        <section id="links">

            <div className="link">
                <div id="about">
                    <div className="zero">
                <a href="index.html">About</a>
                    </div>
                </div>
            </div>

            <div className="link">
                <div id="portfoliolink">
                    <div className="zero">
                <a href="portfolio.html">Portfolio</a>
                    </div>
                </div>
            </div>

            <div className="link">
                <div id="contact">
                    <div className="zero">
                <a href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
            <div className="link">
                <div id="contact">
                    <div className="zero">
                <a href="https://www.linkedin.com/in/gurinderpreet-singh-9363291ab/">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="link">
                <div id="contact">
                    <div className="zero">
                <a href="https://github.com/Gurinderp">GitHub</a>
                    </div>
                </div>
            </div>
            <div className="link">
                <div id="contact">
                    <div className="zero">
                <a href="./pdf.html">Resume</a>
                    </div>
                </div>
            </div>

        </section>
        </div>
    );
}

export default Resume;