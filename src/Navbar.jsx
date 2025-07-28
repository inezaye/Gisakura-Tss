import React, { useState } from 'react';
import './index.css';

const smoothScrollTo = (targetY, duration = 1500) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const scrollStep = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  };

  requestAnimationFrame(scrollStep);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(y, 1500);
      setIsOpen(false); // auto-close on selection
    }
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-header">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      <div className={`navbar ${isOpen ? 'open' : ''}`} id="navbar">
        <button onClick={() => scrollToSection('section1')}>Home</button>
        <button onClick={() => scrollToSection('section2')}>About us</button>
        <button onClick={() => scrollToSection('section3')}>School Representatives</button>
        <button onClick={() => scrollToSection('section4')}>Contact us</button>
      </div>
    </nav>
  );
};

export default Navbar;
