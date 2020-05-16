import React from 'react'
import './homeDisplay.css';
import react from './react.png';
function homeDisplay() {
    return (
        <>
            <div className='home'>
                <h2>Mateusz Figoń</h2>
                <h1>Front-end Developer</h1>
            </div>
            <div className="footer">
                <h1>Made with </h1><img src={react} alt=""></img>
            </div>
        </>
    )
}

export default homeDisplay
