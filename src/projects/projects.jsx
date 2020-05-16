import React from 'react'
import './projects.css';
import json from '../projects.json';
function projects() {
    const projectsDisplay = json.map((item)=>{
        return(
            <div className="project">
                <div className="project-content">
                    <h1>{item.name}</h1>
                    <img src="https://robohash.org/%22?sets=1,3%22" alt=""></img>
                </div>
            </div>
        );
    })
    return (
        <div className="projects">
            {projectsDisplay}
        </div>
    )
}

export default projects
