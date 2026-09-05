import { useState } from 'react'
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


  const [filter, setFilter] = useState("all");


  const displayedProjects = 
    filter === "completed"
      ? projects.filter((project) => project.completed === true)
      : filter === "not completed"
      ? projects.filter((project) => project.completed === false)
      : projects;


  let displayedProjects2;
  if (filter === "completed") {
    displayedProjects2 = projects.filter((project) => project.completed === true)
  }
  else if (filter === "not completed") {
    displayedProjects2 = projects.filter((project) => project.completed === false)
  }
  else {
    displayedProjects2 = projects;
  }


  return (
    <>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <button onClick={() => setFilter("not completed")}>Not Completed</button>

      <div>
        <h1>Portfolio</h1>
        {displayedProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            tech={project.tech}
            completed={project.completed}/>
        ))}
      </div>
    </>
    
  );
}