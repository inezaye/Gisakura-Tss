import { useEffect, useState } from 'react';
import './Home.css';

const backgroundImages = [
  '/images/Gisakura.png',
  '/images/Frank.jpg',
  '/images/Logo.png',
  '/images/Carpentry.jpg'

  
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 8 seconds shuffle

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
    </section>
  );
};

export default Home;
