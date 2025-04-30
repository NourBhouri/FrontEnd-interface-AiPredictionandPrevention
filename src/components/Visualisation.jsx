import React from "react";
import "./Visualisation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/draexlmaier-logo.png";

import {
  faChartLine,
  faUserPlus,
  faExclamationTriangle,
  faSignOutAlt,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Visualisation() {
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
            New Employee
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
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input className="search" placeholder="Search" />
          </div>
          <div className="user-section">
            <FontAwesomeIcon icon={faBell} className="icon" />
            <div className="user-circle"></div>
            <div className="user-info">
              <span>User1</span>
              <small>Admin</small>
            </div>
          </div>
        </div>

        <h1 className="visual-title">Visualization</h1>

        <div className="cards">
          <div className="card">
            <div className="pie"></div>
            <h2>Jemmel</h2>
          </div>
          <div className="card">
            <div className="bar"></div>
            <h2>Sousse</h2>
          </div>
          <div className="card">
            <div className="gauge"></div>
            <h2>El Jem</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
