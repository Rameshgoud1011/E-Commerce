import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Discover Your Style</h1>
        <p>Trendy products at unbeatable prices.</p>
        <a href="#products" className="btn">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;
