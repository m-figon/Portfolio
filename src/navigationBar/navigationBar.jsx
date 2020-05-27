import React, {Component} from 'react'
import './navigationBar.css';
import {Link} from 'react-router-dom';
import github from './github-logo.png';
import linkedin from './linkedin-logo.png';
import cv from './cv.svg';
class navigationBar extends Component {
    constructor(){
        super();
        this.state={
            id1: "",
            id2: "",
            id3: "",
            id4: "",
        }
    }
    click(array){
        this.setState({
            id1: "",
            id2: "",
            id3: "",
            id4: "",
            [array]: "selected"
        })
    }
    render(){
        return (
            <div className="navigation-bar">
                <div className="right">
                <Link to="/" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1 id={this.state.id1} onClick={()=>this.click('id1')}>Home</h1></Link>
                    <Link to="/About" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1 id={this.state.id2} onClick={()=>this.click('id2')}>About</h1></Link>
                    <Link to="/Projects" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1 id={this.state.id3} onClick={()=>this.click('id3')}>Projects</h1></Link>
                    <Link to="/Contact" style={{ textDecoration: 'none', color: "rgba(255, 255, 255, 0.7)" }}><h1 id={this.state.id4} onClick={()=>this.click('id4')}>Contact</h1></Link>
                    <a href="https://github.com/m-figon/"><img alt="" id="circle" src={github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/mateusz-figo%C5%84/"><img src={linkedin} alt=""/></a>
                    <a href="https://drive.google.com/open?id=1IjOpfUKuKWuPkzt0AXClr1Ivmn4fe7as"><img  src={cv} alt=""/></a>
                </div>
            </div>
        )
    }
    
}

export default navigationBar
