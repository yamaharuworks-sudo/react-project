function ProjectCard ({id, title, tech, completed, deleteProject, toggleCompleted}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{tech} </p>
            {completed ? (
                <p>completed!</p>
            ) : (
                <p>Not Completed</p>
            )} 
            <button onClick={() => 
                deleteProject(id)
            }>Delete</button>
            <button onClick={() => 
                toggleCompleted(id)
            }> {completed ? "Mark as Not Completed" : "Mark as Completed"}</button>

        </div>
    );
}

export default ProjectCard;