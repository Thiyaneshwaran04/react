import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Add this if you create a CSS file

const Sidebar = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Navigates to the home page
  };

  return (
    <div className="sidebar">
      <h2>Muzeolux Admin</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Auctions</li>
        <li>Reports</li>
      </ul>
      <div className="back-to-home">
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default Sidebar;
