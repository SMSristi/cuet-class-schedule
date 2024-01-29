import React from 'react';
import Banner from '../../components/Banner';
import './Home.css'; // Import the CSS file for your Home component

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <h1>It's home</h1>
    </div>
  );
};

export default Home;
