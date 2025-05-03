import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjecrCard';


const Projects = () => {
  return (
    <div className="projects-container" style={{ paddingTop: '100px'  }}> 
     
      <h1  style={{textAlign: 'center'}}>My Projects</h1>

      <ProjectCard
  title="WeatherAlerts App"
  description="An app that provides real-time weather updates and alerts using a weather API. Includes email notifications."
  gitLink="https://github.com/charana-konda/WeatherMonitoringWebApp?tab=readme-ov-file"
  websiteLink="https://weatheralerts.vercel.app"
  techStack={['Spring Boot', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript']}
  image="/assets/weatherapp-preview.png" // or from a URL
/>


      <ProjectCard
        title="QR & Barcode Scanner"
        description="A web-based application to scan barcodes and QR codes using device camera."
        gitLink="https://github.com/charana-konda/qr-scanner"
        websiteLink=""
        techStack={['Python', 'Flask', 'JavaScript', 'HTML', 'CSS']}
        image="/assets/BarcodeReader1.png" 
      />
    </div>
  );
};

export default Projects;


