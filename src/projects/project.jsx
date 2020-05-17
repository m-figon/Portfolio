import React from 'react'
import './projects.css';
import projectData from '../projects.json';
import github from './github-logo.png';
function project(props) {
    if (props.projectId !== null) {
        let technologies = projectData[props.projectId].technologies.map((elem) => {
            return (
                <div className="technology">{elem}</div>
            );
        })
        return (
            <div id={props.visibleId} className="selected-project">
                <div className="selected-project-content">
                    <div className="left-part">
                        <div className="part-content">
                            <img src="https://robohash.org/%22?sets=1,3%22" alt=""></img>
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="part-content">
                            <h2>{projectData[props.projectId].name}</h2>
                            <div className="one-line">
                                {technologies}
                            </div>
                            <h1>{projectData[props.projectId].description}</h1>
                            <a href={projectData[props.projectId].link}><button><img src={github}></img>View Code</button></a>
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
