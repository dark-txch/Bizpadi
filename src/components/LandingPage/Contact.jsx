import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialSkype } from "react-icons/ti";
import "./Contact.css";
import HomeButton from "../Reusable/HomeButton";
import { FaShareAltSquare } from "react-icons/fa";

export default function Contact() {
	return (
		<div className="contact">
			<section className="header">
				<HomeButton />
				<h1>Get In Touch With Us Now!</h1>
			</section>

			<main>
				<div>
					<FaPhone className="headIcon" color="hsla(201, 98%, 45%, 1)" />
					<p> Phone Number </p>
					<p>+2348000123456</p>
				</div>

				<div>
					<FaEnvelope className="headIcon" color="hsla(201, 98%, 45%, 1)" />
					<p>Email</p>
					<p>info@bizpadi.com</p>
				</div>
				<div>
					<FaShareAltSquare
						className="headIcon"
						color="hsla(201, 98%, 45%, 1)"
					/>
					<div className="socials">
						<FaInstagram color="hsla(201, 98%, 45%, 1)" size={20} />
						<p>@bizpadihq</p>
					</div>
					<div className="socials">
						<FaFacebook color="hsla(201, 98%, 45%, 1)" size={20} />
						<p>@bizpadihub</p>
					</div>
					<div className="socials">
						<FaTwitter color="hsla(201, 98%, 45%, 1)" size={20} />
						<p>@bizpadi_app</p>
					</div>
				</div>
				<div>
					<FaClock className="headIcon" color="hsla(201, 98%, 45%, 1)" />
					<p>Working Hours</p>
					<p>Monday To Saturday</p>
					<p>8:00 AM To 6:00 PM </p>
				</div>
			</main>
		</div>
	);
}
