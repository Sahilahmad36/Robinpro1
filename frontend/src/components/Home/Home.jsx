import React, { useEffect } from 'react';
import img from "../../assets/img.jpg";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import './Home.css';

const Home = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('card-visible');
      }, index * 300);
    });
  }, []);

  const cardBackgrounds = [
    `url(${img1})`,  
    `url(${img})`, 
    `url(${img2})`       
  ];

  return (
    <main className="home">
      <section className="cards-section">
        <div className="card" style={{ backgroundImage: cardBackgrounds[0] }}>
          <div className="card-content">
            <h3>Product</h3>
            <p>This is the product dashboard</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: cardBackgrounds[1] }}>
          <div className="card-content">
            <h3>Service</h3>
            <p>This is the service dashboard</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
        <div className="card" style={{ backgroundImage: cardBackgrounds[2] }}>
          <div className="card-content">
            <h3>Spa</h3>
            <p>This is the spa dashboard</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
