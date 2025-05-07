import React from "react";
import "./Prediction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUserPlus,
  faExclamationTriangle,
  faSignOutAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/draexlmaier-logo.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function Prediction() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  // Initialize the useNavigate hook
  const handleClick = () => {
    navigate("/Prevention"); // Navigate to the Prediction page
  };
  const handleClick_visual = () => {
    navigate("/Visualization"); // Navigate to the Prediction page
  };
  // Initialize the useNavigate hook
  const handleClick_worker = () => {
    navigate("/NewWorker"); // Navigate to the Prediction page
  };
  const handleClick_accident = () => {
    navigate("/NewAccident"); // Navigate to the Prediction page
  };
  const handleClick_logOut = () => {
    navigate("/SignInPage"); // Navigate to the Prediction page
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="title">Dashboard</h2>
        <div className="menu">
          <button onClick={handleClick_visual} className="menu-btn ">
            <FontAwesomeIcon icon={faChartLine} />
            Visualization
          </button>
          <button onClick={handleClick_worker} className="menu-btn">
            <FontAwesomeIcon icon={faUserPlus} />
            New Employee
          </button>
          <button onClick={handleClick_accident} className="menu-btn">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            Add Accident
          </button>
          <button onClick={handleClick_logOut} className="menu-btn">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Log Out
          </button>
        </div>
        <img src={logo} alt="DRÄXLMAIER Logo" className="logo-img" />
      </div>

      <div className="main">
        <div className="top-bar">
          <div className="search-container">
            <FontAwesomeIcon icon="search" className="search-icon" />
            <input className="search" placeholder="Search" />
          </div>
          <FontAwesomeIcon icon={faBell} className="icon" />
          <div className="user-circle"></div>
          <div className="user-info">
            <span>User1</span>
            <small>Admin</small>
          </div>
        </div>

        <div className="prediction-card">
          <h2>Prediction Results</h2>
        </div>

        <button onClick={handleClick} className="prevent-btn">
          Prevent
        </button>
      </div>
    </div>
  );
}
