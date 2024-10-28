import React, { useState } from 'react';
import './projects.css';
import Sidebar from "../Sidebar/Sidebar.jsx"; // Import Sidebar component

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project A',
      description: 'A brief overview of Project A.',
      details: 'This project is about developing [...]',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'A brief overview of Project B.',
      details: 'This project is about developing [...]',
    },
    {
      id: 3,
      title: 'Project C',
      description: 'A brief overview of Project C.',
      details: 'This project is about developing [...]',
    },
  ];

  const handleToggle = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className='full-page'>
    <Sidebar />
    <div className="projects-page-wrapper">
      <h1 className="header">Ongoing Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header" onClick={() => handleToggle(project.id)}>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <button className="toggle-button">
                {expandedProject === project.id ? 'Less Info ▲' : 'More Info ▼'}
              </button>
            </div>
            {expandedProject === project.id && (
              <div className="project-details">
                <p>{project.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;