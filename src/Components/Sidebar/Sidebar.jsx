import React, { useState } from "react";
import { FaHome, FaTasks, FaComments, FaChartLine } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-logo">My App</div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isSidebarCollapsed ? "☰" : "×"} {/* Toggle icon */}
      </button>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="#home" className="sidebar-link">
            <FaHome className="sidebar-icon" /> <span>Home</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#topics" className="sidebar-link">
            <FaChartLine className="sidebar-icon" /> <span>Topics</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#tasks" className="sidebar-link">
            <FaTasks className="sidebar-icon" /> <span>My Tasks</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#messages" className="sidebar-link">
            <FaComments className="sidebar-icon" /> <span>Messages</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar; // Ensure you are using 'export default' here
