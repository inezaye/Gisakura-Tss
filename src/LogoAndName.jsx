import React, { useState } from 'react';

const smoothScrollTo = (targetY, duration = 1500) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

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

const LogoAndName = () => {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(y, 1500);
      setNavOpen(false); // close dropdown after click
    }
  };

  return (
    <header className="header">
      <div className="logo-and-name">
        <img className="logo" src="/images/Logo.png" alt="logo" />
        <h1 className="app-name">GISAKURA TSS</h1>
      </div>

      {/* Toggle button below logo */}
      <button
        className="nav-toggle-button"
        onClick={() => setNavOpen(!navOpen)}
        aria-expanded={navOpen}
        aria-controls="nav-dropdown"
      >
        {navOpen ? 'Close Menu ▲' : 'Open Menu ▼'}
      </button>

      {/* Dropdown navbar */}
      <nav
        className={`nav-dropdown ${navOpen ? 'open' : ''}`}
        id="nav-dropdown"
        aria-hidden={!navOpen}
      >
        <button onClick={() => scrollToSection('section1')}>Home</button>
        <button onClick={() => scrollToSection('section2')}>About us</button>
        <button onClick={() => scrollToSection('section3')}>
          School Representatives
        </button>
        <button onClick={() => scrollToSection('section4')}>Contact us</button>
      </nav>
    </header>
  );
};

export default LogoAndName;
