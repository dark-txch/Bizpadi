import "./components/LandingPage/LandingPage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
// Upper imports are very important
import Nav from "./components/LandingPage/Nav";
import PricingPage from "./components/LandingPage/PricingPage/Pricing";
import LogInPage from "./components/LandingPage/LogInPage/LogIn";
import MidSection from "./components/LandingPage/MidSection";
import Footer from "./components/LandingPage/Footer";
import SignUp from "./components/LandingPage/SignUp/SignUp";
import Welcome from "./components/LandingPage/SignUp/welcome";
import WelcomeSecond from "./components/LandingPage/SignUp/welcomeSecond"

function LandingPage() {
	return (
		<>
			<div className="landingPageContainer">
				<Nav />
				<MidSection />
				<Footer />
			</div>
		</>
	);
}

function App() {
	return (
		<Router>
			{" "}
			{/* This sets the base path for all routes */}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/login" element={<LogInPage />} />
				<Route path="/signUp" element={<SignUp/>} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/welcomeSecond" element={<WelcomeSecond/>} />

			</Routes>
		</Router>
	);
}

export default App;
