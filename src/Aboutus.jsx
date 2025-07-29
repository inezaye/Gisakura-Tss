// src/components/Aboutus.jsx
import React from 'react';
import './Aboutus.css';
import CounterCircle from './CounterCircle';

const Aboutus = () => {
  return (
    <section id="section2" className="about-section">
      <div className="about-content">
        <h2 className="section-title">
          About Our School
          <hr />
        </h2>
        <p className="about-description">
          We are committed to academic excellence and holistic student development.
          We nurture integrity, innovation, and responsibility in every learner.
        </p>

        <div className="mission-vision">
          <div className="mini-card">
            <h3>Our Mission</h3>
            <p>🔵 To provide effective and efficient educational skills in a conducive environment and to equip students with the capacity to compete in the job market.</p>
            <p>🔵 To promote vocational and technical training to produce competent graduates for the labor market.</p>
            <p>🔵 To enhance technical skills and promote innovation.</p>
            <p>🔵 To advance an entrepreneurial culture in our learners.</p>
          </div>

          <div className="mini-card">
            <h3>Our Vision</h3>
            <p>🔵 At GS Gisakura, we aspire to become the leading provider of quality and inclusive education in our province and beyond.</p>
          </div>
        </div>

        <div className="cards-container">
          <div className="info-card">
            <h3>Primary Performance<hr /></h3>
            <CounterCircle target={100} />
            <h5>National Exams 2023</h5>
            <p>All primary students excelled with distinction in core subjects.</p>
          </div>
          <div className="info-card">
            <h3>O'Level Results<hr /></h3>
            <CounterCircle target={97} />
            <h5>National Exams 2023</h5>
            <p>Maintaining consistent academic excellence each year.</p>
          </div>
          <div className="info-card">
            <h3>A'Level Excellence<hr /></h3>
            <CounterCircle target={98} />
            <h5>TVET Performance</h5>
            <p>Outstanding pass rates and readiness for the job market.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
