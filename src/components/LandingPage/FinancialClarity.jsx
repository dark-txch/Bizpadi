// import { div } from "framer-motion/client";
import "./FinancialClarity.css";
import { useState, useEffect } from "react";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function MidSection() {
	const [mobileMenu, setMobileMenu] = useState(false);
	const toggleMobileMenu = () => {
		setMobileMenu(!mobileMenu);
	};
	const [showMenuButton, setShowMenuButton] = useState(false);
	// SHOW MENU BUTTON LOGIC
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowMenuButton(true);
			} else {
				setShowMenuButton(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		// PARENT CONTAINER
		<div className="midSection">
			<nav>
				<button
					onClick={toggleMobileMenu}
					className={`mobileMenuButton ${showMenuButton ? "visible" : ""}`}
				>
					{mobileMenu ? (
						<RiMenuFold3Fill size={40} />
					) : (
						<RiMenuFold4Fill size={40} />
					)}
				</button>

				{/* Conditional Menu */}
				<AnimatePresence>
					{showMenuButton && mobileMenu && (
						<motion.ul
							className="mobileMenuLinks"
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<li>
								<Link to="/pricing">Pricing</Link>
							</li>
							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
						</motion.ul>
					)}
				</AnimatePresence>
			</nav>
			{/* SECTION HOUSING THE HEADING AND PARAGRAPH  CONTAINER*/}
			<section className="sectionMotto">
				{/* HEADING AND PARAGRAPH  CONTAINER */}
				<div className="headingParagraph">
					<h1>
						Your financial <span>clarity</span> is a top <span>priority</span>.
					</h1>
					<p>“Streamlining your finances, simplifying your success”</p>
				</div>
			</section>

			{/* THIS IS THE IMAGES SECTION IN THE MID SECTION */}
			<section className="sectionImagesParent">
				<div className="ImageChildrenWrapper">
					<img src="/assets/images/smiley.png" alt="smiley" />
					<img src="/assets/images/Vector-black.png" alt="vector-black" />
					<img src="/assets/images/Vector-blue.png" alt="vector-blue" />
					<img src="/assets/images/Vector-orange.png" alt="vector-orange" />
					<img src="/assets/images/Vector.png" alt="vector" />
				</div>
			</section>
		</div>
	);
}
