import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./welcomeSecond.css";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

export default function WelcomeSecond() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		companyName: "",
		industry: "",
		description: "",
		currency: "",
		estimatedRevenue: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
	};

	const handleSelectChange = (e) => {
		setForm({ ...form, currency: e.target.value });
	};

	const handleFinish = async () => {
		// Save current step to localStorage
		localStorage.setItem(
			"signup_step3",
			JSON.stringify({
				business_name: form.companyName,
				industry: form.industry,
				business_description: form.description,
				currency: form.currency,
				estimated_revenue: form.estimatedRevenue,
			})
		);

		// Gather all stored signup steps
		const step1 = JSON.parse(localStorage.getItem("signup_step1") || "{}");
		const step2 = JSON.parse(localStorage.getItem("signup_step2") || "{}");
		const step3 = JSON.parse(localStorage.getItem("signup_step3") || "{}");

		const allData = {
			...step1,
			...step2,
			...step3,
		};

		try {
			const response = await fetch(
				"https://bizpadi-backend.onrender.com/api/v1/auth/register",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(allData),
				}
			);

			if (response.ok) {
				navigate("/dashboard");
			} else {
				const error = await response.json();
				alert("Signup failed: " + (error.message || "Something went wrong"));
			}
		} catch (err) {
			console.error("Error:", err);
			alert("An error occurred while signing up.");
		}
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.5 }}
			>
				<div className="abt-biz">
					<div className="biz-form">
						<h2>Bizpadi</h2>
						<p>Tell us about your business so we can tailor your experience</p>

						<form className="form-frame">
							<div className="frame">
								<label htmlFor="companyName">
									Company Name
									<input
										type="text"
										id="companyName"
										value={form.companyName}
										onChange={handleChange}
										required
									/>
								</label>
								<label htmlFor="industry">
									Industry
									<input
										type="text"
										id="industry"
										value={form.industry}
										onChange={handleChange}
										required
									/>
								</label>
								<label htmlFor="description">
									How would you describe your business?
									<input
										type="text"
										id="description"
										value={form.description}
										onChange={handleChange}
										required
									/>
								</label>
								<label htmlFor="estimatedRevenue">
									What is your estimated revenue this year?
									<div className="estimate">
										<select
											id="currency"
											value={form.currency}
											onChange={handleSelectChange}
										>
											<option value="">Select currency</option>
											<option value="NGN">Naira (NGN) - ₦</option>
											<option value="USD">US Dollar (USD) - $</option>
											<option value="EUR">Euro (EUR) - €</option>
										</select>
										<input
											type="text"
											id="estimatedRevenue"
											placeholder="Estimated revenue"
											value={form.estimatedRevenue}
											onChange={handleChange}
											required
										/>
									</div>
								</label>
							</div>

							<div className="biz-btns">
								<Link className="biz-btn back-btn" to="/welcome">
									Back
								</Link>
								<button
									type="button"
									className="biz-btn finish-btn"
									onClick={handleFinish}
								>
									Save and Finish
								</button>
							</div>
						</form>
					</div>

					<div className="stage">
						<div className="vector3">
							<img
								src="/assets/images/Rectangle 17.png"
								alt="Vector cylinder"
							/>
							<img
								src="/assets/images/Rectangle 18.png"
								alt="Vector cylinder"
							/>
						</div>
						<div className="diagram3">
							<div className="step3">
								<div className="circle">✓</div>
								<p>Enter your profile information</p>
							</div>

							<div className="line3"></div>

							<div className="step3">
								<div className="circle3">2</div>
								<p>Tell us about your business</p>
							</div>
						</div>

						<section className="bottom3">
							<div className="contact-us3">
								<img src="/assets/icons/Vector.(2).svg" alt="Contact icon" />
								<p>Contact Support</p>
							</div>

							<div className="log-out3">
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
