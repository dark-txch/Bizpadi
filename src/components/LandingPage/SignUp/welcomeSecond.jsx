import { Link } from "react-router-dom"
import "./welcomeSecond.css"


export default function WelcomeSecond(){
    return(
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
                        //   value={}
                          required
                          />
                    </label>
                    <label htmlFor="industry">
                        Industry
                        <input
                          type="text"
                          id="industry"
                        //   value={}
                          required
                          />
                    </label>
                    <label htmlFor="description">
                        How would you describe your business?
                        <input
                          type="text"
                          id="description"
                        //   value={}
                          required
                          />
                    </label>
                    <label htmlFor="currency">
                        What is your estimated revenue this year?
                        <div className="estimate">
                          <select name="currency" id="currency">
                              <option value=""> Naira (NGN) - ₦</option>
                              <option value=""> US Dollar (USD) - $ </option>
                              <option value=""> Euro (EUR) - €</option>
                          </select>
                          <input
                          type="text"
                          id="currency"
                          placeholder="Estimated revenue"
                          required
                           />
                        </div>
                    </label>
                </div>

                <div className="biz-btns">
                            <Link className="biz-btn back-btn" to="/welcome">Back</Link>
                            <Link className="biz-btn finish-btn" to="/dashboard">Save and Finish</Link>
                        </div>
               </form>

            </div>

            <div className="stage">
            <div className="vector3">
                    <img src="/assets/images/Rectangle 17.png"  alt="Vector cylinder"  />
                    <img src="/assets/images/Rectangle 18.png" alt="Vector cylinder"  />
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
    )

}