import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/LandingPage/Nav";
import PricingPage
import MidSection from "./components/LandingPage/MidSection";
import Footer from "./components/LandingPage/Footer";
import PricingPage from "./pages/PricingPage";

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
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/pricing" element={<PricingPage />} />
			</Routes>
		</Router>
	);
}

export default App;
