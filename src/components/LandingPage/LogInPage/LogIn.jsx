import { useState } from "react"
import { Link } from "react-router-dom"
import "./login.css"
import { FaHouse } from "react-icons/fa6"
import { FaEye, FaEyeSlash } from 'react-icons/fa'



export default function LogIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
      }
    

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        setMessage("")
    
        if (!email || !password) {
          setError("Please fill in both fields.")
          return
        }
    
        try {
          const response = await fetch("https://your-backend.com/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
    
          const data = await response.json()
    
          if (response.ok) {
            setMessage("Login successful!")
            localStorage.setItem("token", data.token); 
            // Optional: redirect the user
          } else {
            setError(data.message || "Login failed.");
          }
        } catch (err) {
          setError("Something went wrong. Please try again.")
          console.error(err)
        }
      }
    

    return(
        <div className="page-wrapper">
          <div className="hero-container">
            <div className="loginContainer">
                <Link to="/">
                      <FaHouse
                      className="home-btn"
                      size={36}
                      />
                </Link>
                <div className="mainItems">
                  <img src="assets/icons/logo.svg" style={{width:"93px", height:"93px"}} alt="Bizpadi logo" />
                  <h2>Log in to Bizpadi</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                       type="email"
                       id="email"
                       value={email}
                       placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}
                       required
                     />
                  <div className="input-wrapper">
                    <input
                       type={showPassword ? "text" : "password"}
                       id="password"
                       value={password}
                       placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}
                       required
                     />
                   <button className="password-icon" onClick={togglePasswordVisibility}>
                           {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <button type="submit" className="login">Login</button>
                  </form>
                  <p className="first">OR</p>
                  <button className="google-btn">
                   <img src="/assets/icons/googlelogo.svg" alt="google icon "/>
                    Sign in with Google
                  </button>
                  <button className="facebook-btn">
                   <img src="/assets/icons/logos_facebook.svg" alt="facebook icon" />
                    Sign in with Facebook
                  </button>
                </div>
                <div className="forgot-password">
                   <p>Forgot your password?</p>
                   <p>Don’t have an account?</p>
                   <Link to="/signup">
                   Sign up
                   </Link>
                </div>
                {/* Feedback messages */}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {message && <p style={{ color: "green" }}>{message}</p>}
            </div>
            <div className="right-side">
              <h3>Bizpadi</h3>
              <p>Simplify your finances with our intuitive accounting</p>
            </div>
          </div>
        </div>
    )
}