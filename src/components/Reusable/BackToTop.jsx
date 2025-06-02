import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import "./BackToTop.css";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className="backToTopBtn"
				aria-label="Back to top"
			>
				<RiArrowUpDoubleLine />
			</button>
		)
	);
};

export default BackToTop;
