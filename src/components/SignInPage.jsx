import React from "react";
import "./SignInPage.css";
import logo from "../assets/logo-Drx.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const SignInPage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleClick_visual = () => {
    navigate("/NewAccident"); // Navigate to the Prediction page
  };
  return (
    <div className="signin-container">
      <div className="overlay">
        <div className="login-box">
          <h2 className="title">SIGN IN</h2>
          <p className="subtitle">Welcome to our World</p>

          <form className="form">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Email or Phone"
                className="input"
              />
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            </div>

            <div className="input-wrapper">
              <input type="password" placeholder="Password" className="input" />
              <FontAwesomeIcon icon={faLock} className="input-icon" />
            </div>

            <div className="forgot-password">
              <a href="#">Forgot password ?</a>
            </div>
            <button
              onClick={handleClick_visual}
              type="button"
              className="signin-button"
            >
              SIGN IN
            </button>
          </form>
        </div>

        <div className="brand">
          <img src={logo} alt="Logo" className="brand-logo" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
