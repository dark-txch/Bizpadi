export default function MidSection() {
	return (
		<section className="midSection">
			<div className="landingPageMotto">
				<h1>
					Your financial <span>clarity <br /></span> is our top <span>priority</span>.
				</h1>
				<p>“Streamlining your finances, simplifying your success”</p>
			</div>

			{/* This is the images section in the mid section */}
			<div className="landingPageImages">
				<img src="/assets/images/smiley.png" alt="smiley" />
				<img src="/assets/images/Vector-black.png" alt="vector-black" />
				<img src="/assets/images/Vector-blue.png" alt="vector-blue" />
				<img src="/assets/images/Vector-orange.png" alt="vector-orange" />
				<img src="/assets/images/Vector.png" alt="vector" />
			</div>
		</section>
	);
}
