import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavigationBar from './navigationBar/navigationBar.jsx';
import HomeDisplay from './homeDisplay/homeDisplay.jsx';
class App extends Component {
  render(){
    const HomePage = () =>{
      return(
        <>
        <NavigationBar/>
        <HomeDisplay/>
        </>
      );
    }
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
  
}

export default App;
