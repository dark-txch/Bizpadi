import dropdown from "../assets/icons/dropdown.png";
import logo from "../assets/icons/logo.svg";

export default function Header() {
	return (
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
					<img src={dropdown} alt="dropdown icon" />
				</a>
				<a href="#">Pricing</a>
				<a href="#">Contact Us</a>
			</div>

			{/* Third div */}
			<div>
				<img src={wol} alt="dropdown icon" />
				<a href="#">Login</a>
				<a href="#">Get Started</a>
			</div>
		</nav>
	);
}
