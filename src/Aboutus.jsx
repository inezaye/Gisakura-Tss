// src/components/Aboutus.jsx
import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <section id="section2" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Our School</h2>
        <p className="about-description">
        
          We are committed to academic excellence and holistic student development.
          <p >
        
          We are committed to academic excellence and holistic student development.
        </p>
        <p >
        
          We are committed to academic excellence and holistic student development.
        </p>
        </p>
        

        <div className="cards-container">
          <div className="info-card">
            <h3>O'Level Performance <hr /></h3>
            <div className="circle">88%</div>
            <h5>National Exams 2023</h5>
            <p>Our students excel in national exams with distinction.</p>
          </div>

          <div className="info-card">
            <h3>A'Level Excellence <hr /></h3>
            <div className="circle">92%</div>
            <h5>Science & Arts Streams</h5>
            <p>Achieving high pass rates and scholarship placements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
