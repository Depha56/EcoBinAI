import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <img src="/tree.jpg" alt="EcoBin Background" />
        <div className="overlay">
          <h1>ECOLOGICAL BIN WITH AI</h1>


          <h3>Simplifying Waste Amplifying Green</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
