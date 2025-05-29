import { Link } from "react-router-dom";
import "./pricing.css";
import { FaHome } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import HomeButton from "../../Reusable/HomeButton";

export default function Pricing() {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5 }}
			>
				<div className="pricing-page">
					<HomeButton />.
					<div className="pricing">
						<div className="pricing-title">
							<h1>Plans that suit your business</h1>
							<p>Pricing covers all the essentials</p>
						</div>
						<div className="pricing-box">
							<div className="pricing-logo">
								<img src="assets\icons\logo.svg" alt="Bizpadi Logo" />
								<p>BIZPADI</p>
							</div>
							<div className="pricing-menu">
								<p>
									Manage income and expenses with ease, master your cash flow
								</p>
								<p>₦6,000</p>
								<p>Per Month</p>
								<button>Get Started</button>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
