import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
// Upper imports are very important
import 
import Nav from "./components/LandingPage/Nav";
import PricingPage from "./components/LandingPage/PricingPage/Pricing";
import LogInPage from "./components/LandingPage/LogInPage/LogIn";
import MidSection from "./components/LandingPage/MidSection";
import Footer from "./components/LandingPage/Footer";

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
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/login" element={<LogInPage />} />
			</Routes>
		</Router>
	);
}

export default App;
