// src/components/Sidebar.js
import { FaHome, FaChartBar, FaTrash, FaCog, FaSync } from 'react-icons/fa'; // Import the icons
import '../styles/Sidebar.css';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
    <main className="mainApp">
        <div className="sidebar">
            <div className="sidebar-logo">
            <img src="/logo1.png" alt="Logo" className="logo" />
            </div>
            <ul className="sidebar-menu">
            <li className="menu-item">
                <Link to="/dashboard"><FaHome className='icon'/> Home</Link>
            </li>
            <li className="menu-item">
                <Link to="/dashboard/report"><FaChartBar className='icon' /> Report</Link>
            </li>
            <li className="menu-item">
                <Link to="/dashboard/bin-levels"><FaTrash className='icon'/> Bin Levels</Link>
            </li>
            <li className="menu-item">
                <Link to="/dashboard/settings"><FaCog className='icon'/> Settings</Link>
            </li>
            </ul>
            <div className="refresh-icon">
            <a href="#home"><FaSync /> LogOut</a>
            </div>
        </div>
        <div className="main_content">
            <Outlet/>
        </div>
    </main>
    );
};

export default Sidebar;
