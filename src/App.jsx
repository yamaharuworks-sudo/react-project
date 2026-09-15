import { useState } from 'react'
import './App.css'

import ProjectCard from './ProjectCard'



export default function App() {

  const [projects, setProjects] =useState([
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
  ]);

  const deleteProject = (id) => {
    setProjects(
      projects.filter((project) => project.id !== id));
  };

  const toggleCompleted = (id) => {
    setProjects(
      projects.map((project) => 
        project.id === id
          ? {
            ...project,
            completed: !project.completed
          }
          : project
      )
    );
    
  };


  const [filter, setFilter] = useState("all");
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");

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
        <input 
          type="text" 
          placeholder='Project title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
        <input 
          type="text" 
          placeholder='tech '
          value={tech}
          onChange={(e) => setTech(e.target.value)}/>
        <button onClick={() => {
          setProjects([
            ...projects,
            {
              id: projects.length + 1,
              title,
              tech,
              completed: true
            }])
          setTitle("");
          setTech("");
        }}>
        Add project</button>
        


        <h1>Portfolio</h1>
        {displayedProjects.map((project) => (
          <ProjectCard 
            id={project.id}
            key={project.id}
            title={project.title}
            tech={project.tech}
            completed={project.completed}
            deleteProject={deleteProject}
            toggleCompleted={toggleCompleted}/>
        ))}
      </div>
    </>
    
  );
}