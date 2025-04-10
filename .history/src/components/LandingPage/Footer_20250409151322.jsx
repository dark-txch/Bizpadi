import "./Footer.css";

export default function Footer() {
	return (
		<div className="footer">
			{/* The section container is the parent to the features */}
			<section className="footerFeaturesParent">
				<div className="singleFeatureContainer items">
					<div className="featureImageContainer"></div>
					<img src="/public/assets/images/client-1.png" alt="client-1" />
					<h1>Items</h1>
					<p>Keep track of the items in your stock, stay ahead.</p>
				</div>

				<div className="singleFeatureContainer clients">
					<div className="featureImageContainer"></div>
					<img src="/public/assets/images/client-2.png" alt="client-2" />
					<h1>Clients</h1>
					<p>
						See how many clients you have, build relationship and deliver
						result.
					</p>
				</div>

				{/* 3TH CONTAINER */}
				<div className="singleFeatureContainer ">
					<div className="featureImageContainer">
						<img
							src="/public/assets/images/track-profit.png"
							alt="track-profit"
						/>
					</div>
					<div className="trackProfits">
						<h1>Track Profits</h1>
						<p>
							Track how much you have made in profit to know how to increase
							profit.
						</p>
					</div>
				</div>

				{/* 4TH CONTAINER */}
				<div className="singleFeatureContainer">
					<div className="featureImageContainer">
						<img
							src="/public/assets/images/track-sales.png"
							alt="track-sales"
						/>
					</div>
					<div className=" trackSales">
						<h1>Track Sales</h1>
						<p>Track how much sales you have made.</p>
					</div>
				</div>
			</section>
		</div>
	);
}
