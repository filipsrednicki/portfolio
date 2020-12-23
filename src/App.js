import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Nav from './Nav'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='sidebar'>
          <Nav/>
        </div>
        <div className='content'>
            <Route exact path='/' render={() => (
                <Home
                  navClick={this.navClick}
                  />
              )}/>
            <Route path='/projects' render={({history}) => (
                <Projects/>
              )}/>
            <Route path='/contact' render={({history}) => (
                <Contact/>
              )}/>
        </div>
      </div>
    );
  }
}

export default App;
