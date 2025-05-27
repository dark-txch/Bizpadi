import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Nav from "./Nav";
import FinancialClarity from "./FinancialClarity";
import Footer from "./Footer";
import CopyRight from "../Reusable/CopyRight";
import TinyScreens from "../Reusable/TinyScreens";
import "./LandingPage.css";

export default function LandingPage() {
	return (
		<motion.div
			className="landingPageContainer"
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
		>
			<Nav />
			<FinancialClarity />
			<Footer />
			<CopyRight />
			<TinyScreens />
		</motion.div>
	);
}
