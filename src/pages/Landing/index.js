import React, { useState } from "react";
import { Redirect } from "react-router-dom"

function Landing() {
	return (
		<div id="top">
        <section id="name">
                <h1>Gurinderpreet Singh</h1>
        </section>

        <section id="links">

            <div class="link">
                <div id="about">
                    <div class="zero">
                <a href="index.html">About</a>
                    </div>
                </div>
            </div>

            <div class="link">
                <div id="portfoliolink">
                    <div class="zero">
                <a href="portfolio.html">Portfolio</a>
                    </div>
                </div>
            </div>

            <div class="link">
                <div id="contact">
                    <div class="zero">
                <a href="contact.html">Contact</a>
                    </div>
                </div>
            </div>
            <div class="link">
                <div id="contact">
                    <div class="zero">
                <a href="https://www.linkedin.com/in/gurinderpreet-singh-9363291ab/">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div class="link">
                <div id="contact">
                    <div class="zero">
                <a href="https://github.com/Gurinderp">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="link">
                <div id="contact">
                    <div class="zero">
                <a href="./pdf.html">Resume</a>
                    </div>
                </div>
            </div>

        </section>
    </div>
		)
}

export default Landing;