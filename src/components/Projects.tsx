import React, { useEffect, useRef } from 'react'
import {projects} from '../utils/project'
import { Link } from 'react-router-dom'
import './Projects.css'

export default function Projects({ }) {
  const projectsRef = useRef(null)

  
  return (
    <div className="projects-container">
      <h1 className="header">Projects</h1>
      <hr />
      <div className="project-card">
        {projects.map((project, id) => (
          <div key={id} className="project-items">
            <img
              src={project.image}
              alt={project.name}
              className="project-image-mobile"
            />
            
            <div className="project-description-container">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github repo
                </a>
                <a
                  href={project.liveVersionLink}
                  className="live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live version
                </a>
              </div>
            </div>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
