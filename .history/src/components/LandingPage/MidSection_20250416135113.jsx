import "./MidSection.css";

export default function MidSection() {
	return (
		// PARENT CONTAINER
		<div className="midSection">
			{/* SECTION HOUSING THE HEADING AND PARAGRAPH  CONTAINER*/}
			<section className="sectionMotto">
				{/*  */}
				<div className="headingParagraph">
					<h1>
						Your financial <span>clarity</span> is a top <span>priority</span>.
					</h1>
					<p>“Streamlining your finances, simplifying your success”</p>
				</div>
			</section>

			{/* This is the images section in the mid section */}
			<section className="sectionImagesParent">
				<div className="ImageChildrenWrapper">
					<img src="/assets/images/smiley.png" alt="smiley" />
					<img src="/assets/images/Vector-black.png" alt="vector-black" />
					<img src="/assets/images/Vector-blue.png" alt="vector-blue" />
					<img src="/assets/images/Vector-orange.png" alt="vector-orange" />
					<img src="/assets/images/Vector.png" alt="vector" />
				</div>
			</section>
		</div>
	);
}
