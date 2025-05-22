import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-content">
        <h1>Welcome to MuseoLux Admin Dashboard</h1>
        <p>
          Manage your auction platform efficiently. Use the links below to navigate to
          different management sections.
        </p>

        <ul className="dashboard-links">
          <li><Link to="/users">Users Management</Link></li>
          <li><Link to="/auctions">Auctions Management</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
