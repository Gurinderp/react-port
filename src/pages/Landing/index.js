import React from "react";

function Landing() {
	return (
		<div>
			<div className="box">
        <div id="content">
            <section id="aboutme">
                Portfolio
            </section>
<hr />
            <section id="portfoliobody">
                <div className="container">

                <div id="rowone">
                    <div className="placehold">
                        <img src="./assets/dab.png" className="img-fluid" onclick="" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/Bootcamp-group-project-1">Emoji Project</a>
                    </div>
                </div>

                    <hr />
                <div id="rowtwo">
                    <div className="placehold">
                        <img src="./assets/passgen.png" className="img-fluid" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/PasswordGenerator">Password Generator</a>
                    </div>
                    <div className="placehold">
                        <img src="./assets/dayplan.png" className="img-fluid" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/dayPlanner">Day Planner</a>
                    </div>
                </div>

                    <hr />
                <div id="game">
                    <div className="placehold">
                        <iframe src="https://scratch.mit.edu/projects/352739837/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                </div>

                </div>
            </section>
        </div>
    </div>
		</div>
	);
}

export default Landing;