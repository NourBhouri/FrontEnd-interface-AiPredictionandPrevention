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

export default function Prediction() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="title">Dashboard</h2>
        <div className="menu">
          <button className="menu-btn ">
            <FontAwesomeIcon icon={faChartLine} />
            Visualization
          </button>
          <button className="menu-btn">
            <FontAwesomeIcon icon={faUserPlus} />
            New Worker
          </button>
          <button className="menu-btn">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            Add Accident
          </button>
          <button className="menu-btn">
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

        <h1 className="visual-title">Prevention</h1>

        <div className="prediction-card">
          <h2>Prevention Results</h2>
        </div>
      </div>
    </div>
  );
}
