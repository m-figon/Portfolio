import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import react from './react.png';
import load from './load.gif';
import NavigationBar from './navigationBar/navigationBar.jsx';
import HomeDisplay from './homeDisplay/homeDisplay.jsx';
import About from './about/about.jsx';
import Projects from './projects/projects.jsx';
import Project from './projects/project.jsx';
import Contact from './contact/contact.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      appId: "",
      projectId: null,
      visibleId: "",
      loadingId: "visible"
    }
    this.settingBlur = this.settingBlur.bind(this);
    this.settingState = this.settingState.bind(this);

  }
  componentDidMount(){
    let interval=setInterval(()=>{
      if(document.readyState==="complete"){
        this.setState({
          loadingId: "hidden"
        })
        clearInterval(interval);
      }
    },500)
  }
  settingState(array,value){
    this.setState({
      [array]: value
    })
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
          <About settingState={this.settingState}/>
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
    const ContactPage = () => {
      return (
        <>
          <Contact />
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
          <Route exact path="/Contact" component={ContactPage} />
          <div className="footer">
            <div className="footer-content">
              <h1>Made with </h1><img src={react} alt=""></img>
            </div>
          </div>
        </div>
        <div className="loading" id={this.state.loadingId}>
          <img src={load}/>
          </div>
        <Project projectId={this.state.projectId} visibleId={this.state.visibleId} settingBlur={this.settingBlur}/>
      </>
    );
  }

}

export default App;
