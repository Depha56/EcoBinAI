import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../../../styles/BinLevels.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BinLevels = () => {
  // State to track whether the graphs are resized or not
  const [isResized, setIsResized] = useState(false);

  // Sample data for the bin levels
  const timestamps = ['2024-09-29 00:18:09', '2024-09-29 00:44:23', '2024-09-29 00:44:53', '2024-09-29 00:51:26', '2024-09-29 00:51:29', '2024-09-29 00:51:36', '2024-09-29 00:51:33'];
  
  // Data for each bin
  const bin1Levels = [32, 36.15, 46.72, 38.67, 38.61, 36.62, 38.61];
  const bin2Levels = [45, 47.55, 46.04, 16.61, 16.62, 56.28, 46.12];
  const bin3Levels = [23, 50.45, 49.45, 49.51, 56.84, 57.28, 57.12];
  const bin4Levels = [51, 0, 56.25, 0, 0, 0, 57.71];

  const generateChartData = (label, data, color) => {
    return {
      labels: timestamps,
      datasets: [
        {
          label: label,
          data: data,
          fill: false,
          borderColor: color,
          tension: 0.1,
        }
      ]
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bin Levels Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <div className="bin-levels-container">
      <h1>Waste Bin Levels</h1>

      {/* Button to toggle resizing */}
      <button onClick={() => setIsResized(!isResized)} className="resize-button">
        {isResized ? 'Display as One Column' : 'Display as Two Columns'}
      </button>
      
      <div className={`chart-container ${isResized ? 'two-columns' : 'one-column'}`}>
        <div className="chart">
          <h2>Bin 1 Level</h2>
          <Line data={generateChartData('Bin 1', bin1Levels, 'rgba(75,192,192,1)')} options={chartOptions} />
        </div>
        
        <div className="chart">
          <h2>Bin 2 Level</h2>
          <Line data={generateChartData('Bin 2', bin2Levels, 'rgba(153,102,255,1)')} options={chartOptions} />
        </div>

        <div className="chart">
          <h2>Bin 3 Level</h2>
          <Line data={generateChartData('Bin 3', bin3Levels, 'rgba(255,159,64,1)')} options={chartOptions} />
        </div>

        <div className="chart">
          <h2>Bin 4 Level</h2>
          <Line data={generateChartData('Bin 4', bin4Levels, 'rgba(54,162,235,1)')} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default BinLevels;
