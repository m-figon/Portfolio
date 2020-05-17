import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import react from './react.png';

import NavigationBar from './navigationBar/navigationBar.jsx';
import HomeDisplay from './homeDisplay/homeDisplay.jsx';
import About from './about/about.jsx';
import Projects from './projects/projects.jsx';
import Project from './projects/project.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      appId: "",
      projectId: null,
      visibleId: ""
    }
    this.settingBlur = this.settingBlur.bind(this);
  }
  settingBlur(idValue) {
    if (this.state.appId === "") {
      this.setState({
        appId: "blured",
        projectId: idValue,
        visibleId: "visible"
      })
    } else if (this.state.appId === "blured") {
      this.setState({
        appId: "",
        projectId: null,
        visibleId: ""
      })
    }
  }
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
          <Projects settingBlur={this.settingBlur} />
        </>
      );
    }
    return (
      <>
        <div className="App" id={this.state.appId}>
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
        <Project projectId={this.state.projectId} visibleId={this.state.visibleId} settingBlur={this.settingBlur}/>
      </>
    );
  }

}

export default App;
