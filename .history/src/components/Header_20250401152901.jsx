import dropdown from "../assets/icons/dropdown.png";
import world from "../assets/icons/world.png";
import logo from "../assets/icons/logo.svg";

export default function Header() {
	return (
		//  
		//  3 separate divs in the header nav section
		// First div
		<nav className="homepage-nav">
			<div className="logo">
				<img src={logo} alt="Bizpadi icon" />
			</div>

			{/* Second div */}
			<div>
				<a href="#">
					Resources
					{/* the {} is to tell react to treat the content as javascript not a simple text */}
					<img src={dropdown} alt="dropdown icon" />
				</a>
				<a href="#">Pricing</a>
				<a href="#">Contact Us</a>
			</div>

			{/* Third div */}
			<div>
				<img src={world} alt="world" />
				<a href="#">Login</a>
				<a href="#">Get Started</a>
			</div>
		</nav>
	);
}
