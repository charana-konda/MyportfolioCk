import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '.././src/components/navbar/Navbar';
import Home from '.././src/pages/Homepage';
import Projects from '.././src/pages/Projects';
import Experience from '.././src/pages/Experience';
import Achievements from '.././src/pages/Achievments';
import AboutMe from './pages/AboutMe/AboutMe';
import { useEffect } from "react";



const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/aboutme" element={<AboutMe />} />
        
      
      </Routes>
    </Router>
  );
};

export default App;

