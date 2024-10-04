import React from 'react';
import { FaRecycle, FaSort, FaCompress, FaSignal, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <FaRecycle className="feature-icon" />
        <h3>AI-based Waste recognition</h3>
        <p>Bin-e uses an AI-based recognition system to identify waste, reaching a world-leading accuracy of over 92%.</p>
      </div>

      <div className="feature">
        <FaSort className="feature-icon" />
        <h3>Automatic Waste sorting</h3>
        <p>The recognized waste will be transported to the right fraction. Everything happens 100% automatically.</p>
      </div>

      <div className="feature">
        <FaCompress className="feature-icon" />
        <h3>Compression of plastic & paper</h3>
        <p>Plastic and paper get compressed to decrease the volume and lower the frequency of bin emptying.</p>
      </div>

      <div className="feature">
        <FaSignal className="feature-icon" />
        <h3>Fill level control and alerts</h3>
        <p>Fill level sensors check whether the bin needs to be emptied. You will get an alert when the bins are full.</p>
      </div>

      <div className="feature">
        <FaDatabase className="feature-icon" />
        <h3>Real-time data management</h3>
        <p>All the data Bin-e collects is transferred onto a cloud and processed in real-time.</p>
      </div>

      <div className="feature">
        <FaMobileAlt className="feature-icon" />
        <h3>App for stats & reports</h3>
        <p>Our app provides detailed statistics about the waste collected, optimizing waste collection and device status.</p>
      </div>
    </div>
  );
};

export default Features;
