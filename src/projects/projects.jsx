import React from 'react'
import './projects.css';
import json from '../projects.json';
function projects(props) {
    const projectsDisplay = json.map((item)=>{
        return(
            <div  onClick={()=>props.settingBlur(item.id)}className="project">
                <div className="project-content">
                    <h1>{item.name}</h1>
                    <img src={item.img} alt=""></img>
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
