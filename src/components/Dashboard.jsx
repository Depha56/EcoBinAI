import { FaHome, FaTrash, FaGift, FaTrophy } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <FaHome /> Zero2Hero
        </div>
        <nav className="nav-links">
          <a href="#home" className="nav-link active">
            <FaHome /> Home
          </a>
          <a href="#report" className="nav-link">
            <FaTrash /> Report Waste
          </a>
          <a href="#collect" className="nav-link">
            <FaTrash /> Collect Waste
          </a>
          <a href="#rewards" className="nav-link">
            <FaGift /> Rewards
          </a>
          <a href="#leaderboard" className="nav-link">
            <FaTrophy /> Leaderboard
          </a>
        </nav>
        <div className="settings">
          <FaHome /> Settings
        </div>
      </aside>
      <main className="content">
        <h1>Zero-to-Hero Waste Management</h1>
        <p>Join our community in making waste management more efficient and rewarding!</p>
        <button className="get-started">Get Started</button>
      </main>
    </div>
  );
};

export default Dashboard;
