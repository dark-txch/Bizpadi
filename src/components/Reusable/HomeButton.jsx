import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import "./HomeButton.css";

const HomeButton = () => {
	const [showButton, setShowButton] = useState(false);

	const handleToggle = () => {
		setShowButton((prev) => !prev);
	};

	return (
		<AnimatePresence>
			<motion.div
				className="buttonWrapper"
				onClick={handleToggle}
				initial={{ x: "-75%" }}
				animate={{ x: showButton ? 0 : "-75%" }}
				exit={{ x: "-75%" }}
				transition={{ duration: 0.4, ease: "easeOut" }}
			>
				<Link to="/" aria-label="Go to home">
					<FaHome className="home-btn" size={30} />
				</Link>
			</motion.div>
		</AnimatePresence>
	);
};

export default HomeButton;
