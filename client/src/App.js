import React , { Component } from 'react'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css'
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home}/>
          <Switch>
            <Route exact path="/profile" component={Profile}/>
          </Switch>
        </>
      </Router>
    );
  }
}
