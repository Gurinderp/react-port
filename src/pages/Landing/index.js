import React from "react";
import dab from '../../assets/dab.png'
import dayplan from '../../assets/dayplan.png'
import passgen from '../../assets/passgen.png'
import food from '../../assets/food.png'
import ok from '../../assets/ok.jpg'
import pine from '../../assets/pine.jpg'

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
                        <img src={dab} className="img-fluid" onclick="" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/Bootcamp-group-project-1">Emoji Project</a>
                    </div>
                </div>
				<div id="rowone">
                    <div className="placehold">
                        <img src={ok} className="img-fluid" onclick="" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/bootcamp-group-project-2">Emoji Project 2</a>
                    </div>
                </div>
				<div id="rowone">
                    <div className="placehold">
                        <img src={food} className="img-fluid" onclick="" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/Evolution-Project">Evo Project</a>
                    </div>
                </div>

                    <hr />
                <div id="rowtwo">
                    <div className="placehold">
                        <img src={passgen} className="img-fluid" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/PasswordGenerator">Password Generator</a>
                    </div>
                </div>
				<div id="rowtwo">
                    <div className="placehold">
                        <img src={pine} className="img-fluid" alt="Responsive image" />
                        <a href="https://github.com/Gurinderp/fitness-tracker">Fitness Tracker</a>
                    </div>
                </div>
				<div id="rowtwo">
					<div className="placehold">
                        <img src={dayplan} className="img-fluid" alt="Responsive image" />
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