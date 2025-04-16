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
import WelcomeSecond from "./components/LandingPage/SignUp/welcomeSecond";
import MainLayout from "./components/LandingPage/Dashboard/Main Layout";
import Dashboard from "./components/LandingPage/Dashboard/Dashboard";
import Inventory from "./components/LandingPage/Dashboard/Inventory";
import Team from "./components/LandingPage/Dashboard/Team";
import Client from "./components/LandingPage/Dashboard/Client";
import TrackSales from "./components/LandingPage/Dashboard/TrackSales";
import CopyRight from "./components/Reusable/CopyRight";

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
			{/* This sets the base path for all routes */}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/login" element={<LogInPage />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/welcomeSecond" element={<WelcomeSecond />} />

				{/* Dashboard Route with Nested Routes */}
				<Route path="/dashboard" element={<MainLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="clients" element={<Client />} />{" "}
					{/* Correct component name */}
					<Route path="inventory" element={<Inventory />} />
					<Route path="sales" element={<TrackSales />} />
					<Route path="team" element={<Team />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
