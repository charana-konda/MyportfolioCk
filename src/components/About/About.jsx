
import React from 'react';
import './About.css';
import Typing from '../Typing/Typing';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <div className="type-name">
            <Typing text="Hi, I am Charana Konda" />
          </div>
          <p>✨ "Code, coffee, and cute vibes only</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/charana-konda-6b5a5426a/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/charana-konda" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/Charna59?t=rGfCCWAUtj8OXWApmgJ3Pg&s=09" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/charana_konda?igsh=MTB2b2E3NGNwc3B3MQ==" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="image-content">
          <img
            src="https://png.pngtree.com/png-vector/20200128/ourmid/pngtree-career-woman-playing-laptop-on-a-chair-in-vector-illustration-png-image_2136007.jpg"
            alt="Charana Konda"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
