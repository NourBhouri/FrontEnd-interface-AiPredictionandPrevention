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

export default function Visualisation() {
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
          <button className="menu-btn">
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

        <div className="chart-card">
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
