import React from 'react'
import './projects.css';
import projectData from '../projects.json';
function project(props) {
    return (
        <div id={props.visibleId} className="selected-project">
            <div className="selected-project-content">
    <h1>{projectData[props.projectId].name}</h1>
            </div>
        </div>
    )
}

export default project
