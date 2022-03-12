import React, { useState } from 'react';

function Projects() {

    const [projects] = useState([
        {
            name: 'P2G2 JobTracker',
            description: 'Job tracker that updates status for employees',
            repository: 'https://github.com/NG-Vincent/P2G2-JobTracker',
            link: 'https://safe-cove-20593.herokuapp.com/'
        },
        {
            name: 'Lyrics Finder',
            description: 'App to search for artist lyrics, created with iTunes and lyrics.ovh APIs',
            repository: 'https://github.com/chamibia/lyrics-finder',
            link: 'https://chamibia.github.io/lyrics-finder/'

        },
        {
            name: 'Note Taker',
            description: 'Take notes, made with express.js',
            repository: 'https://github.com/chamibia/note-taker',
            link: 'https://taker--note.herokuapp.com/'

        },
        {
            name: 'Work Day Scheduler',
            description: 'Keep track of your workday with this scheduler',
            repository: 'https://github.com/chamibia/scheduler', 
            link: 'https://chamibia.github.io/scheduler/'

        },
        {
            name: 'Weather Dashboard',
            description: 'A weather dashboard that allows you to search and save multiple cities and returns a 5-day forcast',
            repository: 'https://github.com/chamibia/weather-dashboard',
            link: 'https://chamibia.github.io/weather-dashboard/'

        }
        
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