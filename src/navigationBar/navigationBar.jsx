import React from 'react'
import './navigationBar.css';
import {Link} from 'react-router-dom';
import github from './github-logo.png';
import linkedin from './linkedin-logo.png';
import cv from './cv.png';
function navigationBar() {
    return (
        <div className="navigation-bar">
            <div className="right">
            <Link to="/" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1>Home</h1></Link>
                <Link to="/AboutMe" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1>About</h1></Link>
                <Link to="/Projects" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1>Projects</h1></Link>
                <Link to="/Contact" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1>Contact</h1></Link>
                <img src={github} alt=""/>
                <img src={linkedin} alt=""/>
                <img src={cv} alt=""/>

            </div>
        </div>
    )
}

export default navigationBar
