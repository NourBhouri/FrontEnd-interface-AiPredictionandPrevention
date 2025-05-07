import React, { useEffect, useRef } from "react";
import "./Visualisation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUserPlus,
  faExclamationTriangle,
  faSignOutAlt,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/draexlmaier-logo.png";
import Chart from "chart.js/auto";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

export default function Visualisation() {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  // Initialize the useNavigate hook
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
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy old chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Logistics",
          "Production",
          "IR",
          "BX8",
          "KS",
          "ZSB",
          "MM",
          "MR",
          "VK",
          "Zeta",
        ],
        datasets: [
          {
            label: "Number of Incidents",
            data: [85, 73, 60, 55, 48, 27, 27, 25, 18, 13],
            backgroundColor: "rgba(237, 234, 39, 0.6)",
            borderColor: "rgb(234, 234, 210)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allow custom sizing
        plugins: {
          title: {
            display: true,
            text: "Number of Incidents per Department Area",
            color: "white", // Set chart title font color to white
          },
          legend: {
            labels: {
              color: "white", // Set legend font color to white
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "white", // Set Y-axis font color to white
            },
            title: {
              display: true,
              text: "Incident Count",
              color: "white", // Set Y-axis title font color to white
            },
          },
          x: {
            ticks: {
              color: "white", // Set X-axis font color to white
            },
            title: {
              display: true,
              text: "Department",
              color: "white", // Set X-axis title font color to white
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="title">Dashboard</h2>
        <div className="menu">
          <button onClick={handleClick_visual} className="menu-btn">
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

        <div className="chart-card">
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
