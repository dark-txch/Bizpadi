import { Link } from "react-router-dom";

export default function Nav() {
	return (
		// Main Landing container, parent housing the landing page
		<>
			{/* Inside of the main is the nav element */}
			<nav className="homepage-nav">
				<div className="logo">
					<img src="/assets/icons/logo.svg" alt="Bizpadi icon" />
				</div>

				{/* Second div */}
				<div>
					<a href="#">
						Resources
						<img src="/assets/icons/dropdown.png" alt="dropdown icon" />
					</a>
					<Link to="/pricing">Pricing</Link>
					<a href="#">Contact Us</a>
				</div>

				{/* Third div */}
				<div>
					<img src="/assets/icons/world.png" alt="world" />
					<Link to="/login">Login</Link>
					<a href="#">Get Started</a>
				</div>
			</nav>
		</>
	);
}
