import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
	return (
		<>
			<nav className="homepage-nav">
				{/* LOGO CONTAINER */}
				<div className="logo">
					<img src="/assets/icons/logo.svg" alt="Bizpadi icon" />
				</div>

				{/* PRICING AND CONTACT US CONTAINER */}
				<div className="pricingContact">
					<Link to="/pricing">Pricing</Link>
					<a href="#">Contact Us</a>
				</div>

				{/* LOGIN AND GET STARTED CONTAINER*/}
				<div className="loginGetStarted">
					<img src="/assets/icons/world.png" alt="world" />
					<Link to="/login">Login</Link>
					<Link to="/signUp">Get Started</Link>
				</div>
			</nav>
		</>
	);
}
