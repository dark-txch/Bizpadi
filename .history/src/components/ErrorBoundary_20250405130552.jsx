import React, { Component } from "react";

class ErrorBoundary extends Component {
	state = { hasError: false };

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {npm run devicePixelRatio
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ textAlign: "center", marginTop: "50px" }}>
					<h2>Oops! Something went wrong.</h2>
					<p>Try refreshing the page or contact support.</p>
					<button onClick={() => window.location.reload()}>Refresh</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
