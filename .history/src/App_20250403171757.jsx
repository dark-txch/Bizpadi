import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
// Upper imports are very important
import Nav from "./components/LandingPage/Nav";
import PricingPage from "./components/LandingPage/PricingPage/Pricing";
import LogInPage from "./components/LandingPage/LogInPage/LogIn";
import MidSection from "./components/LandingPage/MidSection";
import Footer from "./components/LandingPage/Footer";

function LandingPage() {
	return (
		<>
			<Nav />
			<MidSection />
			<Footer />
		</>
	);
}

function App() {
	return (
		<Router>
			<ErrorBoundary>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</ErrorBoundary>
		</Router>
	);
}

export default App;
