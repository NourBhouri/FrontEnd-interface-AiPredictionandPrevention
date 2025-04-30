import React from "react";
import "./SignInPage.css";
import logo from "../assets/logo-Drx.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const SignInPage = () => {
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
              type="button"
              className="signin-button"
              Click={() => (window.location.href = "/Visualisation.jsx")}
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
