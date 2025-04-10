import { Link } from "react-router-dom";

export default function Nav() {
	return (
		// Main Landing container, parent housing the landing page
		<>
			<nav className="homepage-nav">
				{/* this is the Logo for the project in the first div */}
				<div className="logo">
					<img src="/assets/icons/logo.svg" alt="Bizpadi icon" />
				</div>

				{/* Second div for pricing and contact us */}
				<div>
					<Link to="/pricing">Pricing</Link>
					<a href="#">Contact Us</a>
				</div>

				{/* Third div for icon, login and get started */}
				<div>
					<img src="/assets/icons/world.png" alt="world" />
					<Link to="/login">Login</Link>
					<a href="#">Get Started</a>
				</div>
			</nav>
		</>
	);
}
