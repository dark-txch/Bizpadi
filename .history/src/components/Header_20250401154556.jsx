import dropdown from "../assets/icons/dropdown.png";
import world from "../assets/icons/world.png";
import logo from "../assets/icons/logo.svg";

export default function Header() {
	return (
		//  Main Landing container, parent housing the landing page
		<main>
			{/* inside of the main is the nav element */}
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

			{/* first body section housing the landing page motto */}
			<section className="landingMotto">
				<h1>your financial clarity is a top priority.</h1>
				<p>&#34; streamlining your finances, simplifying your success</p>
			</section>
		</main>
	);
}
