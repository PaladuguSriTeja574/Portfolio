import React, { useState, useEffect } from 'react';
import styles from './HeroStyles.module.css'; // Import CSS module
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const titles = ["Frontend Developer", "Web Developer", "DevOps Engineer", "ML Engineer", "React Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 2000);

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  return (
    <section id="hero" className={styles.container}> 
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero} 
          alt="Profile picture of Teja Chowdary"
        />
        <img
          className={styles.colorMode} 
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}> 
        <h1 className={styles.fullName} >
          Paladugu Sri <br />Teja Chowdary
        </h1>
        <h2 key={currentTitle} className={styles.titleSlide}>{titles[currentTitle]}</h2>
        <span>
          <a href="https://x.com/Teja081502" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/PaladuguSriTeja574" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/teja-chowdary-10a5a3227" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}> 
          With a passion for developing <br/> modern React web apps for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
