function ProjectCard ({id, title, tech, completed, deleteProject}) {
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

        </div>
    );
}

export default ProjectCard;