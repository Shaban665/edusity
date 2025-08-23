import React from 'react';
import './Hero.css';
import arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          A university is a tertiary education and research institution that awards academic degrees 
          in various disciplines. It offers a broad curriculum and graduate programs alongside 
          undergraduate degrees.
        </p>
        <button className="btn">
          Explore More <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
