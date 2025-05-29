import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useInView } from "framer-motion";
import "./Footer.css";

export default function Footer() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setIsMobile(width <= 600);
			setIsTablet(width > 600 && width <= 1024);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const Feature = ({ children }) => {
		const ref = useRef(null);
		const inView = useInView(ref, {
			once: false,
			amount: 0.3,
		});

		const mobileVariants = {
			initial: { opacity: 0, y: 20 },
			animate: (inView) =>
				inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
		};

		const tabletVariants = {
			initial: { opacity: 0, y: 100 },
			animate: (inView) =>
				inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
		};

		const desktopVariants = {
			initial: { opacity: 0, y: 500 },
			animate: { opacity: 1, y: 0 },
			transition: { duration: 2, ease: "linear" },
		};

		// Determine which variant and animation to use
		let selectedVariant;
		let animate;

		if (isMobile) {
			selectedVariant = mobileVariants;
			animate = selectedVariant.animate(inView);
		} else if (isTablet) {
			selectedVariant = tabletVariants;
			animate = selectedVariant.animate(inView);
		} else {
			selectedVariant = desktopVariants;
			animate = selectedVariant.animate;
		}

		return (
			<AnimatePresence>
				<motion.div
					ref={ref}
					initial={selectedVariant.initial}
					animate={animate}
					{...(isMobile || isTablet
						? {}
						: {
								whileHover: { scale: 1.2 },
								transition: {
									...(selectedVariant.transition ?? {
										duration: 1.2,
										ease: "easeOut",
									}),
									scale: {
										duration: 0.3,
										ease: "easeInOut",
									},
								},
						  })}
					{...(isMobile || isTablet
						? {
								transition: selectedVariant.transition ?? {
									duration: 1.2,
									ease: "easeOut",
								},
						  }
						: {})}
					className="singleFeatureContainer"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		);
	};

	return (
		<div className="footer">
			<section className="footerFeaturesParent">
				<Feature>
					<div className="featureImageContainer">
						<img src="/assets/images/client-1.png" alt="client-1" />
					</div>
					<div className="items">
						<h1>Items</h1>
						<p>Keep track of the items in your stock, stay ahead.</p>
					</div>
				</Feature>

				<Feature>
					<div className="featureImageContainer">
						<img src="/assets/images/client-2.png" alt="client-2" />
					</div>
					<div className="clients">
						<h1>Clients</h1>
						<p>
							See how many clients you have, build relationship and deliver
							result.
						</p>
					</div>
				</Feature>

				<Feature>
					<div className="featureImageContainer">
						<img src="/assets/images/track-profit.png" alt="track-profit" />
					</div>
					<div className="trackProfits">
						<h1>Track Profits</h1>
						<p>
							Track how much you have made in profit to know how to increase
							profit.
						</p>
					</div>
				</Feature>

				<Feature>
					<div className="featureImageContainer">
						<img src="/assets/images/track-sales.png" alt="track-sales" />
					</div>
					<div className="trackSales">
						<h1>Track Sales</h1>
						<p>Track how much sales you have made.</p>
					</div>
				</Feature>
			</section>
		</div>
	);
}
