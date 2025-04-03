import { Link } from "react-router-dom"
import "./pricing.css"

export default function Pricing(){
    return(
        <div className="pricing-page">
             <div className="back-button">
                <Link to="/">
                <button className="home">← Home</button>
                </Link>
            </div>
            <div className="pricing">
                <div className="pricing-title">
                    <h1>Plans that suit your business</h1>
                    <p>Pricing covers all the essentials</p>
                </div>
                <div className="pricing-box">
                    <div className="pricing-logo">
                        <img src="assets\icons\logo.svg" alt="Bizpadi Logo" />
                        <p>BIZPADI</p>
                    </div>
                    <div className="pricing-menu">
                        <p>Manage income and expenses with ease, master your cash flow</p>
                        <p>₦6,000</p>
                        <p>Per Month</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

