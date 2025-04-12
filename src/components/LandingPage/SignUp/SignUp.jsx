import { Link } from "react-router-dom"
import "./signUp.css"
import { FaHouse } from "react-icons/fa6"
import { FaEye, FaEyeSlash } from 'react-icons/fa'


export default function SignUp(){
    return(
        <div className="page-wrapper">
            <div className="hero-signup">
                <div className="hero-left-side">
                    <Link to="/">
                         <FaHouse
                            size={36}
                            className="btn-home"
                         />
                    </Link>
                    <h2>Sign up</h2>
                     <form  className="form-group">
                        <input
                         type="text"
                         id="firstName"
                        //  value={firstName}
                         placeholder="First Name"
                        //  onChange={(e) => setEmail(e.target.value)}
                         required
                         />
                        <input
                         type="text"
                         id="lastName"
                        //  value={lastName}
                         placeholder="Last Name"
                        //  onChange={(e) => setEmail(e.target.value)}
                         required
                         />
                        <input
                         type="email"
                         id="email"
                        //  value={email}
                         placeholder="Email"
                        //  onChange={(e) => setEmail(e.target.value)}
                         required
                         />
                         
                         {/* include a password must be so and so characters and length */}
                        <div className="div-wrapper">
                            <input
                              type= "password" //show password? text : passowrd
                             id="password"
                            //  value={password}
                             placeholder="Password"
                            //  onChange={(e) => setPassword(e.target.value)}
                             required
                             />
                             
                             {/* INCLUDE SHOW PASSWORD */}
                             <button className="password-icon"> 
                              <FaEye/>
                             </button> 
                        </div>

                        <Link to="/welcome" className="reg-btn">
                            Register
                         </Link>
                         
                
                    </form>

                    <p className="other">OR</p>
                    <section className="options">
                        <button className="ggl-btn">
                           <img src="/assets/icons/googlelogo.svg" alt="google icon "/>
                           Sign up with Google
                        </button>
                        <button className="fb-btn">
                           <img src="/assets/icons/logos_facebook.svg" alt="facebook icon" />
                           Sign up with Facebook
                        </button>
                    </section>
                    <p className="sign-in">
                        Already have an account?      
                        <Link to="/login"> Sign in</Link>
                    </p>
                    
                </div>
                <div className="hero-right-side">
                <h3>Bizpadi</h3>
                <p>Simplify your finances with our intuitive accounting</p>
                </div>
            </div>
        </div>
    )
}