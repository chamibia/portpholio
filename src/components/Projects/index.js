import React, { useState } from 'react';

function Projects() {

    const [projects] = useState([
        {
            name: 'P2G2 JobTracker',
            description: 'Job tracker that updates status for employees',
            repository: 'https://github.com/NG-Vincent/P2G2-JobTracker',
            link: 'https://safe-cove-20593.herokuapp.com/'
        }
        //add rest of projects 
    ])
    return(
        <section>
            {projects.map(project => {
                return (
                    <div key={project.name}>
                        <h1 className="proj-name">{project.name}</h1>
                        <h2 className="proj-desc">{project.description}</h2>
                        <p className="proj-repo"><a href={project.repository}>Github</a></p>
                        <p className="proj-link"><a href={project.link}>Project link</a></p>
                    </div>
                )
            })}
        </section>
    );
}

export default Projects;