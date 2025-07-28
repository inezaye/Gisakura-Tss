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
          We nurture integrity, innovation, and responsibility in every learner.
        </p>

        <div className="mission-vision">
          <div className="mini-card">
            <h3>Our Mission</h3>
            <p>To empower students with quality education for a better future.</p>
          </div>

          <div className="mini-card">
            <h3>Our Vision</h3>
            <p>To be a center of excellence in knowledge, discipline, and service.</p>
          </div>
        </div>

        <div className="cards-container">
          <div className="info-card">
            <h3>Primary Performance<hr /></h3>
            <div className="circle">100%</div>
            <h5>National Exams 2023</h5>
            <p>Students excel with distinction in core subjects.</p>
          </div>
          <div className="info-card">
            <h3>O'Level Results<hr /></h3>
            <div className="circle">97%</div>
            <h5>National Exams 2023</h5>
            <p>Consistently strong academic performance.</p>
          </div>
          <div className="info-card">
            <h3>A'Level Excellence<hr /></h3>
            <div className="circle">98%</div>
            <h5>Science & Arts Streams</h5>
            <p>High pass rates and top university admissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
