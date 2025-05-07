import { Link } from "react-router-dom"
import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import "./Contact.css"




export default function Contact(){
    return (
        <div className="contact">
            <section className="header">
                <Link to="/">
                    <FaHouse size={32} color="white"/>
                </Link>
                <h1>Get In Touch With Us Now!</h1>
            </section>

            <main>
                <div>
                    <FaPhone  color="hsla(201, 98%, 45%, 1)" size={35}/>
                    <p> Phone Number </p>
                    <p>+2348000123456</p>
                </div>

                <div>
                    <FaEnvelope color="hsla(201, 98%, 45%, 1)" size={35}/>
                    <p>Email</p>
                    <p>info@bizpadi.com</p>
                </div>
                <div> 
                    <div className="socials">
                        <FaInstagram color="hsla(201, 98%, 45%, 1)" size={35}/> 
                        <p>@bizpadihq</p>
                    </div>
                    <div className="socials">
                        <FaFacebook color="hsla(201, 98%, 45%, 1)" size={35}/> 
                        <p>@bizpadihub</p>
                    </div>
                    <div className="socials">
                        <FaTwitter color="hsla(201, 98%, 45%, 1)" size={35}/> 
                        <p>@bizpadi_app</p>
                    </div>
                </div>
                <div>
                    <FaClock color="hsla(201, 98%, 45%, 1)" size={35}/>
                    <p>Working Hours</p>
                    <p>Monday To Saturday</p>
                    <p>8:00 AM To 6:00 PM </p>
                </div>
            </main>
        </div>
    )
}