import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import './App.css';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
    <Router> 
      <div className="app">
        <Navbar/>
        <Switch> 
          <Route exact path="/" component={SignUp}/>
          <Route path="/login" component={SignIn}/>
        </Switch>
      </div> 
      
    </Router>
    );
  }
}

export default App;
