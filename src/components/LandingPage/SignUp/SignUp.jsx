import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css";
import HomeButton from "../../Reusable/HomeButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function SignUp() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem(
			"signup_step1",
			JSON.stringify({
				first_name: form.first_name,
				last_name: form.last_name,
				email: form.email,
				password: form.password,
				confirm_password: form.password,
			})
		);

		console.log("Saved data:", localStorage.getItem("signup_step1"));
		navigate("/welcome"); // go to welcome page
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="page-wrapper"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5 }}
			>
				<div className="page-wrapper">
					<div className="hero-signup">
						<div className="hero-left-side">
							<HomeButton />
							<h2>Sign up</h2>
							<form className="form-group" onSubmit={handleSubmit}>
								<input
									type="text"
									id="first_name"
									value={form.first_name}
									placeholder="First Name"
									onChange={handleChange}
									required
								/>
								<input
									type="text"
									id="last_name"
									value={form.last_name}
									placeholder="Last Name"
									onChange={handleChange}
									required
								/>
								<input
									type="email"
									id="email"
									value={form.email}
									placeholder="Email"
									onChange={handleChange}
									required
								/>
								<div className="div-wrapper">
									<input
										type={showPassword ? "text" : "password"}
										id="password"
										value={form.password}
										placeholder="Password"
										onChange={handleChange}
										required
									/>
									<button
										type="button"
										className="password-icon"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? <FaEyeSlash /> : <FaEye />}
									</button>
								</div>

								<button type="submit" className="reg-btn">
									Register
								</button>
							</form>

							<p className="other">OR</p>
							<section className="options">
								<button className="ggl-btn">
									<img src="/assets/icons/googlelogo.svg" alt="google icon" />
									Sign up with Google
								</button>
								<button className="fb-btn">
									<img
										src="/assets/icons/logos_facebook.svg"
										alt="facebook icon"
									/>
									Sign up with Facebook
								</button>
							</section>
							<p className="sign-in">
								Already have an account?
								<Link to="/login"> Sign in</Link>
							</p>
						</div>
						<div className="hero-right-side">
							<h3>Bizpadi</h3>
							<p>Simplify your finances with our intuitive accounting</p>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
