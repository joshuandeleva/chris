import React from "react";
import "./Contact.css";
import { GrTwitter } from "react-icons/gr"
import { ImFacebook } from "react-icons/im"
import{AiFillGithub} from "react-icons/ai"
import{FaLinkedin} from "react-icons/fa"
import Button from "@material-ui/core/Button";
function Contact() {
	return (
		<div className="contact">
			<h2>Get in Touch</h2>
			<p className="sub__heading">Contact me</p>
			<div className="contact__detailsMain">
				<div className="contact__form">
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Email" />
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="write message"
					></textarea>
					<Button className="contact__btn">Submit</Button>
				</div>
				<div className="contact__details">
					<div className="contact__detailsItem">
						<span>Email</span>
						<span className="item__name">
							wanjohiChistopher@gmail.com
						</span>
					</div>
					<div className="contact__detailsItem">
						<span>Phone Number</span>
						<span className="item__name">+254707926812</span>
					</div>
					<div className="contact__detailsItem">
                        <span>Lets engage in social Media</span>
                        <div className="social__media">
                            <li><a href="/"><AiFillGithub /></a></li>
                            <li><a href="/"><GrTwitter /></a></li>
                            <li><a href="/"><FaLinkedin /></a></li>
                            <li><a href="/"><ImFacebook /></a></li>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
