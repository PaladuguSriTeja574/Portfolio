import React from 'react';
import '../../App.css';
import heroImg from '../../assets/hero-img.png';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title sectionTitle">About Me</h1>
        <p className="about-description">
          I'm a passionate developer with a love for creating beautiful and functional web applications. With a background in design and development, I strive to build experiences that are not only visually appealing but also user-friendly.
        </p>
        <div className="about-image-container">
          <img src={heroImg} alt="About Me" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
