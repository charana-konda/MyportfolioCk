
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './About.css';

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',    // Replace with your actual EmailJS service ID
      'your_template_id',   // Replace with your actual template ID
      form.current,
      'your_public_key'     // Replace with your actual public key
    )
    .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        alert('Failed to send the message. Please try again.');
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="https://via.placeholder.com/300" alt="Your profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm Chakravarty, a passionate Computer Science student with a love for solving real-world problems through technology.
          </p>
          <h3>My Interests</h3>
          <ul>
            <li>🎨 Drawing & Painting</li>
            <li>💻 Coding & Problem Solving</li>
            <li>🎶 Listening to Music</li>
            <li>🚀 Exploring Startups & Tech Innovations</li>
          </ul>
        </div>
      </div>

      <div className="contact-section">
        <h2>Get in Touch</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default About;
