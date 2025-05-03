import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './AboutMe.css'; // Adjust the path as necessary

const About = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_mvvpez5',    // Replace with your actual EmailJS service ID
      'template_iqrleoh',   // Replace with your actual template ID
      form.current,
      'PmNZPiDCOnCiXHxfe'     // Replace with your actual public key
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
          <img src="/assets/me.jpg" alt="Your profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          I'm Charana, undergraduate student with a passion for coding and artificial intelligence. I enjoy solving complex problems and using my skills to create innovative solutions. I am fascinated by the potential of AI and its ability to transform industries from healthcare to finance. In my free time, I enjoy exploring new coding languages and frameworks and experimenting with AI concepts. I am eager to apply my problem-solving skills and passion for AI to real-world challenges. If you're looking for a dedicated and enthusiastic team member, please feel free to connect with me.
          </p>
          <h3>My Resume</h3>
          <p> 📄 <a href="https://drive.google.com/file/d/19jHLdjPhraj014dgtxeLVXOKw3pfBJC7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download My Resume</a></p>
          <h3>Education</h3>
          <p> 👩‍💻 Bachelor of Technology in Computer Science Engineering</p>
          <p> VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad</p>
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
