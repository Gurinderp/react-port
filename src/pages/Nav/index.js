import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div id="top">
        <section id="name">
                <h1>Gurinderpreet Singh</h1>
        </section>

        <section id="links">
            <Link to="/about">
            <div className="link">
                <div id="about">
                    <div className="zero">
                <li>About</li>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/">
            <div className="link">
                <div id="portfoliolink">
                    <div className="zero">
                <li>Portfolio</li>
                    </div>
                </div>
            </div>
            </Link>

            <Link to="/contact">
            <div className="link">
                <div id="contact">
                    <div className="zero">
                <li>Contact</li>
                    </div>
                </div>
            </div>
            </Link>

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


            <Link to="/resume">
            <div className="link">
                <div id="contact">
                    <div className="zero">
                <li>Resume</li>
                    </div>
                </div>
            </div>
            </Link>


        </section>
    </div>
        
	);
}

export default Nav;