import React, { Children, useState } from 'react';
import artistLyrics from '../../assets/portfolio/artist.png';
import calendar from '../../assets/portfolio/calendar.png';
import maintaker from '../../assets/portfolio/maintaker.png';
import weather from '../../assets/portfolio/weatherD.png';
import workday from '../../assets/portfolio/workday.png';
import final from '../../assets/portfolio/final-project.png'; 

function Projects() {

    const [projects] = useState([
        {
            name: 'Mission Possible',
            description: 'Charity website that allows users to donate to a cause',
            img: final,
            repository: 'https://github.com/Fabscg/group-3-project',
            link: 'https://glacial-cliffs-90348.herokuapp.com/'
        },
        {
            name: 'P2G2 JobTracker',
            description: 'Job tracker that updates status for employees',
            img: calendar,
            repository: 'https://github.com/NG-Vincent/P2G2-JobTracker',
            link: 'https://safe-cove-20593.herokuapp.com/'
        },
        {
            name: 'Lyrics Finder',
            description: 'App to search for artist lyrics, created with iTunes and lyrics.ovh APIs',
            img: artistLyrics,
            repository: 'https://github.com/chamibia/lyrics-finder',
            link: 'https://chamibia.github.io/lyrics-finder/'

        },
        {
            name: 'Note Taker',
            description: 'Take notes, made with express.js',
            img: maintaker,
            repository: 'https://github.com/chamibia/note-taker',
            link: 'https://taker--note.herokuapp.com/'

        },
        {
            name: 'Work Day Scheduler',
            description: 'Keep track of your workday with this scheduler',
            img: workday,
            repository: 'https://github.com/chamibia/scheduler', 
            link: 'https://chamibia.github.io/scheduler/'

        },
        {
            name: 'Weather Dashboard',
            description: 'A weather dashboard that allows you to search and save multiple cities and returns a 5-day forcast',
            img: weather,
            repository: 'https://github.com/chamibia/weather-dashboard',
            link: 'https://chamibia.github.io/weather-dashboard/'

        }
        
    ])
    return(
        <section className="projects">
            <h1 className="projects-header" style={{fontSize:"60px"}}>Projects</h1>
            {projects.map(project => {
                return (
                    <div  className="w3-row-padding w3-padding-16 w3-center" key={project.name}>
                            <div class="w3-quarter-center">
                          <img className="card-img-top" src={project.img}  style={{width:"80%", height:"50%"}} alt="projects"/>

                        <div className="card-body">
                        <h5 class="card-title">{project.name}</h5>
                      
                        <h6 className="card-subtitle mb-2 text-muted">{project.description}</h6>
                        <p className="card-link"><a href={project.repository} target="_blank" rel="noreferrer">Github</a></p>
                        <p className="card-link" style={{marginBottom:"8%"}}><a href={project.link} target="_blank" rel="noreferrer">Project link</a></p>
                        </div>
                    </div>
                    </div>
                    )
            })}
        </section>
    );
}

export default Projects;