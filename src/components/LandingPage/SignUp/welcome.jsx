import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./welcome.css";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function Welcome() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		location: "",
		phone: "",
		info: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleNext = () => {
		localStorage.setItem(
			"signup_step2",
			JSON.stringify({
				phone_number: form.phone,
			})
		);
		navigate("/welcomeSecond");
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5 }}
			>
				<div className="wlcm-container">
					<div className="leftside-white">
						<h2>Bizpadi</h2>
						<h3>Welcome!</h3>
						<p>Let's set up your profile</p>

						<form className="form2">
							<div className="flexbox">
								<div className="personal-info">
									<label htmlFor="firstName">
										First Name
										<input
											className="name-btn"
											type="text"
											id="firstName"
											value={form.firstName}
											onChange={handleChange}
											required
										/>
									</label>
									<label htmlFor="lastName">
										Last Name
										<input
											className="name-btn"
											type="text"
											id="lastName"
											value={form.lastName}
											onChange={handleChange}
											required
										/>
									</label>
								</div>
								<label htmlFor="location">
									Where are you located?
									<input
										type="text"
										id="location"
										value={form.location}
										onChange={handleChange}
										required
									/>
								</label>
								<label htmlFor="phone">
									Phone Number
									<input
										type="tel"
										id="phone"
										value={form.phone}
										onChange={handleChange}
										required
									/>
								</label>
								<label htmlFor="info">
									How did you hear about us?
									<select id="info" value={form.info} onChange={handleChange}>
										<option disabled value="">
											Please choose an option
										</option>
										<option value="social_media">Social Media</option>
										<option value="friend">Friend or Family</option>
										<option value="google">Google Search</option>
										<option value="advertisement">Advertisement</option>
										<option value="other">Other</option>
									</select>
								</label>

								<div className="btns">
									<Link className="btn back-btn" to="/signup">
										Back
									</Link>
									<button
										type="button"
										className="btn next-btn"
										onClick={handleNext}
									>
										Next
									</button>
								</div>
							</div>
						</form>
					</div>

					<div className="rightside-blue">
						<div className="vector">
							<img
								src="/assets/images/Rectangle 17.png"
								alt="Vector cylinder"
							/>
							<img
								src="/assets/images/Rectangle 18.png"
								alt="Vector cylinder"
							/>
						</div>
						<div className="diagram">
							<div className="step">
								<div className="circle">1</div>
								<p>Enter your profile information</p>
							</div>

							<div className="line"></div>

							<div className="step2">
								<div className="circle2">2</div>
								<p>Tell us about your business</p>
							</div>
						</div>

						<section className="bottom">
							<div className="contact-us">
								<img src="/assets/icons/Vector.(2).svg" alt="Contact icon" />
								<p>Contact Support</p>
							</div>

							<div className="log-out">
								<img src="/assets/icons/Vector.svg" alt="Log out icon" />
								<p>Log Out</p>
							</div>
						</section>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
