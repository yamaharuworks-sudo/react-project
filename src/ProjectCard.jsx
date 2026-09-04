function ProjectCard ({title, tech,completed}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{tech} </p>
            {completed ? (
                <p>completed!</p>
            ) : (
                <p>Not Completed</p>
            )} 

        </div>
    );
}

export default ProjectCard;