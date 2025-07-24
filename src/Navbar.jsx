import React from 'react';

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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 30; // adjust this if you want some space from top
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(y, 1500); // duration in ms
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <button onClick={() => scrollToSection('section1')}>Home</button>
      <button onClick={() => scrollToSection('section2')}>About us</button>
      <button onClick={() => scrollToSection('section3')}>School Representatives</button>
      <button onClick={() => scrollToSection('section4')}>Contact us</button>
    </nav>
  );
};

export default Navbar;
