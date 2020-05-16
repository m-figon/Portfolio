import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import react from './react.png';

import NavigationBar from './navigationBar/navigationBar.jsx';
import HomeDisplay from './homeDisplay/homeDisplay.jsx';
import About from './about/about.jsx';
import Project from './projects/projects.jsx';
class App extends Component {

  render() {
    const HomePage = () => {
      return (
        <>
          <HomeDisplay />
        </>
      );
    }
    const AboutPage = () => {
      return (
        <>
          <About />
        </>
      );
    }
    const ProjectsPage = () => {
      return (
        <>
          <Project />
        </>
      );
    }
    return (
      <div className="App">
        <NavigationBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/Projects" component={ProjectsPage} />
        <div className="footer">
          <div className="footer-content">
          <h1>Made with </h1><img src={react} alt=""></img>
          </div>
          
        </div>
      </div>
    );
  }

}

export default App;
