// src/components/Sidebar.js
import React from 'react';
import { FaHome, FaChartBar, FaTrash, FaCog, FaSync } from 'react-icons/fa'; // Import the icons
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo1.png" alt="Logo" className="logo" />
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <a href="#home"><FaHome className='icon'/> Home</a>
        </li>
        <li className="menu-item">
          <a href="#report"><FaChartBar className='icon' /> Report</a>
        </li>
        <li className="menu-item">
          <a href="#bin-levels"><FaTrash className='icon'/> Bin Levels</a>
        </li>
        <li className="menu-item">
          <a href="#settings"><FaCog className='icon'/> Settings</a>
        </li>
      </ul>
      <div className="refresh-icon">
        <a href="#home"><FaSync /> LogOut</a>
      </div>
    </div>
  );
};

export default Sidebar;
