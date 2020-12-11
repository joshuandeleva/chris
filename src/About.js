import React from "react";
import "./About.css";
import Button from "@material-ui/core/Button";
import chris from "./images/chrispic.png";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly"
import SpeedIcon from "@material-ui/icons/Speed"
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent"
import {GoRocket} from "react-icons/go"
function About() {
	return (
        <div className="about">
            <h1>About</h1>
            <div className="about__projects">
                <div className="about__item">
                    <SpeedIcon className="abt__icon" />
                    <h6>Fast</h6>
                    <p>Fast load time and lag free interaction is always my first priority</p>
                </div>
                <div className="about__item">
                    <MobileFriendlyIcon className="abt__icon"/>
                    <h6>Dynamic</h6>
                    <p>Fast load time and lag free interaction is always my first priority</p>
                </div>
                <div className="about__item">
                    <WbIncandescentIcon className="abt__icon" />
                    <h6>Integrated</h6>
                    <p>Fast load time and lag free interaction is always my first priority</p>
                </div>
                <div className="about__item">
                    <GoRocket className="abt__icon" />
                    <h6>Competent</h6>
                    <p>Fast load time and lag free interaction is always my first priority</p>
                </div>
            </div>
			<div className="about__details">
				<img className="abt__img" src={chris} alt="" />
				<div className="about__me">
					<h6>About Me</h6>
					<p>
						An experienced junoir data scientist extracting insights
						from real world data to derive meaningfull intutions to
						help business solve problems.Am proficient in
						python,sql,leveraging on Machine Learning, DeeepLearning
					</p>
					<p>
						Am an Enthusiastist to data because of my Mathematical
						background which i have spent years on trying to
						understand (the domain) problems in the society .Data
						lover
					</p>
					<Button className="about__meButton">Contact Me</Button>
				</div>
			</div>
		</div>
	);
}

export default About;
