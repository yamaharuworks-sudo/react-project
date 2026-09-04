import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import ProjectCard from './ProjectCard'



export default function App() {
  const projects = [
    {
      id: 1,
      title: " Website",
      tech: "WordPress",
      completed: true
    },
    {
      id: 2,
      title: "Makaron website",
      tech: "JavaScript",
      completed: false
    },
    {
      id: 3,
      title: "Recruit website",
      tech: "JavaScript",
      completed: true
    }
  ];
  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map((project) => (
        <ProjectCard title={project.title}
        tech={project.tech}
        completed={project.completed}/>
      ))}
    </div>
  );
}