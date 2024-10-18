import React, { useState } from "react";
import {
  FaHome,
  FaTasks,
  FaComments,
  FaChartLine,
  FaRegListAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="header-container">
        <button className="toggle-button" onClick={toggleSidebar}>
          {isSidebarCollapsed ? "☰" : "×"} {/* Toggle icon */}
        </button>
        <div className="sidebar-logo">My App</div>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/home" className="sidebar-link">
            <FaHome className="sidebar-icon" /> <span>Home</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/todo" className="sidebar-link">
            <FaRegListAlt className="sidebar-icon" /> <span>To Do</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/topics" className="sidebar-link">
            <FaChartLine className="sidebar-icon" /> <span>Topics</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/tasks" className="sidebar-link">
            <FaTasks className="sidebar-icon" /> <span>My Tasks</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/messages" className="sidebar-link">
            <FaComments className="sidebar-icon" /> <span>Messages</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar; // Ensure you are using 'export default' here
