import { Link } from "react-router-dom"
import "./welcome.css"


export default function Welcome(){
    return(
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
                                //    value={}
                                required
                                   />
                            </label>
                            <label htmlFor="lastName">
                                Last Name
                                <input
                                   className="name-btn"
                                   type="text"
                                   id="lastName"
                                //    value={}
                                required
                                   />
                            </label>
                        </div>
                        <label htmlFor="location">
                            Where are you located?
                            <input
                               type="text"
                               id="location"
                            //    value={}
                            required
                               />
                        </label>
                        <label htmlFor="phone">
                            Phone Number
                            <input
                               type="tel"
                               id="phone"
                            //    value={}
                            required
                               />
                        </label>
                        <label htmlFor="info">
                            How did you hear about us?
                            {/* <select value={selectedOption} onChange={handleChange}> */}
                            <select id="info">
                               <option  disabled selected value="">
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
                            <Link style={{
                                backgroundColor:"hsla(201, 100%, 24%, 1)",
                                width: "4.0625rem",
                                padding:"12px",
                                borderRadius:"12px",
                                color:"hsla(0, 0%, 100%, 1)",
                                fontWeight: "600",
                                fontSize:"18px",
                                border:"none",
                                marginRight:"10px"
                                }}to="/welcomeSecond">Next</Link>
                            <Link style={{
                               backgroundColor:"hsla(201, 100%, 24%, 1)",
                               width: "4rem",
                               padding:"12px",
                               borderRadius:"12px",
                               color:"hsla(0, 0%, 100%, 1)",
                               fontWeight: "600",
                               fontSize:"18px",
                               border:"none"
                            }}to="/signup">Back</Link>
                        </div>
                    </div>
                </form>

            </div>

            <div className="rightside-blue">
                <div className="vector">
                    <img src="/assets/images/Rectangle 17.png"  alt="Vector cylinder"  />
                    <img src="/assets/images/Rectangle 18.png" alt="Vector cylinder"  />
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
    )
}