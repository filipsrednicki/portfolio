import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'
import NotFound from './NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='sidebar'>
          <Nav/>
        </div>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
