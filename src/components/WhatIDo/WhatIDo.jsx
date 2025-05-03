import React from 'react';
import './WhatIDo.css';
import useInView from '../../hooks/UseInView';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGithub, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiJest } from 'react-icons/si';

const SkillBox = ({ title, iconList, direction }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`skill-box ${isVisible ? direction : ''}`}
    >
      <h3>{title}</h3>
      <ul className="skills-list">
        {iconList.map(({ icon, name, color }, index) => (
          <li key={index} style={{ color }}>
            {icon} {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <section className="what-i-do-section">
      <h2>What I Do 💻</h2>
      <p>
        I craft responsive web apps, build efficient backend systems, and bring creative ideas to life through code. I love solving real-world problems and continuously exploring new technologies!
      </p>

      <div className="skills-container">
        <SkillBox
          title="🖥️ Frontend"
          direction="from-left"
          iconList={[
            { icon: <FaHtml5 />, name: 'HTML', color: '#e34c26' },
            { icon: <FaCss3Alt />, name: 'CSS', color: '#264de4' },
            { icon: <FaJs />, name: 'JavaScript', color: '#f0db4f' },
            { icon: <FaReact />, name: 'React', color: '#61DBFB' },
          ]}
        />
        <SkillBox
          title="⚙️ Backend"
          direction="from-right"
          iconList={[
            { icon: <FaJava />, name: 'Java', color: '#007396' },
            { icon: <SiSpringboot />, name: 'Spring Boot', color: '#6DB33F' },
            { icon: <FaPython />, name: 'Python', color: '#306998' },
            { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
          ]}
        />
        <SkillBox
          title="☁️ Tools & Cloud"
          direction="from-left"
          iconList={[
            { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
            { icon: <SiJest />, name: 'Jest / JUnit', color: '#99425b' },
            { icon: <FaGithub />, name: 'Git & GitHub', color: '#333' },
          ]}
        />
      </div>
    </section>
  );
};

export default WhatIDo;
