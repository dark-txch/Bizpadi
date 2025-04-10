export default function Footer() {
	return (
		<div className="footer">
			{/* The section container is the parent to the features */}
			<section>
				<div className="featuresContainer items">
					{/* The feautureOntainer class is given to all the divs housing the features */}
					<div className="imageContainer">
						<img src="/public/assets/images/client-1.png" alt="client-1" />
					</div>
					<h1>Items</h1>
					<p>Keep track of the items in your stock, stay ahead.</p>
				</div>

				<div className="featuresContainer clients">
					<div className="imageContainer">
						<img src="/public/assets/images/client-2.png" alt="client-2" />
					</div>
					<h1>Clients</h1>
					<p>
						See how many clients you have, build relationship and deliver
						result.
					</p>
				</div>

				<div className="featuresContainer trackProfits">
					<div className="imageContainer">
						<img
							src="/public/assets/images/track-profit.png"
							alt="track-profit"
						/>
					</div>
					<h1>Track Profits</h1>
					<p>
						Track how much you have made in profit to know how to increase
						profit.
					</p>
				</div>

				<div className="featuresContainer trackSales">
					<div className="imageContainer">
						<img
							src="../../../"
							alt="track-sales"
						/>
					</div>
					<h1>Track Sales</h1>
					<p>Track how much sales you have made.</p>
				</div>
			</section>
		</div>
	);
}
