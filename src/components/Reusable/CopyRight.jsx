import "./CopyRight.css";

export default function CopyRight() {
	let date = new Date().getFullYear();

	return (
		<div className="copyRight">
			<p>&#xa9; {date} Bizpadi. All Rights Reserved</p>
		</div>
	);
}
