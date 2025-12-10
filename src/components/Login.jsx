import React, { useState } from "react";
import "./Login.css";
import logo from "./Assets/spt_classes_logo.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");  

  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "",
    color: "",
  });

 
  function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); 
    }
  }

  function evaluatePassword(pwd) {
    let score = 0;

    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    let label = "";
    let color = "";

    if (pwd.length === 0) {
      label = "";
      color = "";
    } else if (score <= 2) {
      label = "Weak password";
      color = "weak";
    } else if (score === 3 || score === 4) {
      label = "Good password";
      color = "medium";
    } else {
      label = "Strong password";
      color = "strong";
    }

    setPasswordStrength({ score, label, color });
  }

 
  function handleSubmit(e) {
    e.preventDefault();

    validateEmail(email);

    if (emailError) {
      return; 
    }

    console.log("Login Data:", { email, password });
  }

  return (
    <div className="login-page">
     
     <div className="bg-waves"></div>
      <div className="login-box">
        
        <div className="login-left">
          <div className="login-left-top">
            <img src={logo} alt="SPT Classes" className="login-left-logo" />
          </div>

          <div className="login-left-content">
            <h2>
              <span>Login</span> to your
              <br />
              SPT Classes account.
            </h2>
            <p>
              Access your enrolled courses, progress and important updates in
              one place.
            </p>
          </div>
        </div>

        
        <div className="login-right">
          <h3 className="login-right-title">
            Please enter your details to continue.
          </h3>

          <form className="login-form" onSubmit={handleSubmit}>
          
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={emailError ? "input-error" : ""} 
                required
              />

             
              {emailError && <p className="error-text">{emailError}</p>}
            </div>

            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                  evaluatePassword(value);
                }}
                required
              />

              <div className="password-hint">
                <small>
                  Use at least 8 characters including uppercase, lowercase, number and a symbol.
                </small>
              </div>

              <div className="password-strength">
                <div
                  className={`password-strength-bar ${passwordStrength.color}`}
                  style={{
                    width: `${(passwordStrength.score / 5) * 100}%`,
                  }}
                />
                {passwordStrength.label && (
                  <span
                    className={`password-strength-label ${passwordStrength.color}`}
                  >
                    {passwordStrength.label}
                  </span>
                )}
              </div>
            </div>

            <button type="submit" className="primary-btn">
              Continue
            </button>
          </form>


          <p className="login-right-subtext">
            Don't have an SPT Classes account yet?{" "}
            <span className="link-text">Create one now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
