import { useEffect, useState } from 'react';
import './Home.css';

const backgroundImages = [
  '/images/Gisakura.png',
   '/images/home6.jpg',
    '/images/home4.jpg',
   '/images/Fnimage1.png',
   '/images/Fnimage3.png',
  
  
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 5 seconds shuffle

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="section1" className="home-section">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`bg-image ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="school-overlay">
        <h2 className="tool">GS GISAKURA<hr /></h2>
        <h3 className="tool">Welcome to Groupe Scolaire Gisakura</h3>
        <h3>A place of knowledge, discipline, and transformation.</h3>
        <h3 className="tool">Environmental protection is our ethic</h3>
      </div>

      <div className="school-moto">
        <h2 className="tool">SCHOOL MOTO<hr /></h2>
        <h3>. Integrity</h3>
        <h3>. Hard work</h3>
        <h3>. Protection and Self-reliance</h3>
      </div>
    </section>
  );
};

export default Home;
