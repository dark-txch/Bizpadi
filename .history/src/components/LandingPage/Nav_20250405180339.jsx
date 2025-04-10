import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<>
			{/* THIS IS THE NAV CONTAINER */}
			<nav className="homepage-nav">
				{/* THIS IS THE LOGO CONTAINER */}
				<div className="logo">
					<img src="/assets/icons/logo.svg" alt="Bizpadi icon" />
				</div>

				{/* THIS IS THE PRICING AND CONTACT US CONTAINER */}
				<div className="pricingContact">
					<Link to="/pricing">Pricing</Link>
					<a href="#">Contact Us</a>
				</div>

				{/* THIS IS THE LOGIN AND GET STARTED CONTAINER*/}
				<div className="loginGetStarted">
					<img src="/assets/icons/world.png" alt="world" />
					<Link to="/login">Login</Link>
					<a href="#">Get Started</a>
				</div>
			</nav>
		</>
	);
}
