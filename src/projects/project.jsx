import React from 'react'
import './projects.css';
import projectData from '../projects.json';
import github from './github-logo.png';
import ReactPlayer from 'react-player';
function project(props) {
    if (props.projectId !== null) {
        let technologies = projectData[props.projectId].technologies.map((elem,id) => {
            return (
                <div key={id} className="technology">{elem}</div>
            );
        })
        return (
            <div id={props.visibleId} className="selected-project">
                <div className="selected-project-content">
                    <div className="left-part">
                        <ReactPlayer height="300px" width="350px" url={projectData[props.projectId].youtube} controls />
                    </div>
                    <div className="right-part">
                        <div className="part-content">
                            <h2>{projectData[props.projectId].name}</h2>
                            <div className="one-line">
                                {technologies}
                            </div>
                            <div className="project-description">
                                <h1>{projectData[props.projectId].description}</h1>
                            </div>
                            <div className="one-line">
                                <a href={projectData[props.projectId].site}><button>Try page</button></a>
                                <a href={projectData[props.projectId].github}><button><img alt="" src={github}></img>View Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="button-div">
                        <button onClick={() => props.settingBlur()}>X</button>
                    </div>
                </div>

            </div>
        )
    } else {
        return (null);
    }

}

export default project
