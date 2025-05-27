import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";

// Landing Page Components
import LandingPage from "./components/LandingPage/LandingPage";
import PricingPage from "./components/LandingPage/PricingPage/Pricing";
import Contact from "./components/LandingPage/Contact";
import LogInPage from "./components/LandingPage/LogInPage/LogIn";
import SignUp from "./components/LandingPage/SignUp/SignUp";
import Welcome from "./components/LandingPage/SignUp/welcome";
import WelcomeSecond from "./components/LandingPage/SignUp/welcomeSecond";

// Dashboard Components
import MainLayout from "./components/LandingPage/Dashboard/MainLayout";
import Dashboard from "./components/LandingPage/Dashboard/Dashboard";
import Inventory from "./components/LandingPage/Dashboard/Inventory";
import Team from "./components/LandingPage/Dashboard/Team";
import Client from "./components/LandingPage/Dashboard/Client";
import TrackSales from "./components/LandingPage/Dashboard/TrackSales";

// Extract routes into a separate component so AnimatePresence can work
function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			{/* AnimatePresence needs to wrap the Route content, not Routes */}
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/login" element={<LogInPage />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/welcomeSecond" element={<WelcomeSecond />} />
				<Route path="/dashboard" element={<MainLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="clients" element={<Client />} />
					<Route path="inventory" element={<Inventory />} />
					<Route path="sales" element={<TrackSales />} />
					<Route path="team" element={<Team />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
}

// Main App
function App() {
	return (
		<Router>
			<ErrorBoundary>
				<AnimatedRoutes />
			</ErrorBoundary>
		</Router>
	);
}
export default App;
