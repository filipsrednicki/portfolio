import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'
import './App.css'

class App extends Component {
  state = {
    active: null,
    routes: [
      {
        name: 'Home',
        path: '/',
        class: 'fa-home'
      },
      {
        name: 'Projects',
        path: '/projects',
        class: 'fa-folder-open'
      },
      {
        name: 'Contact',
        path: '/contact',
        class: 'fa-envelope'
      }
    ]
  }

  componentDidMount() {
    const pathName = window.location.pathname

    if (pathName.includes('about')) {
      this.setState({active: 'About'})
    } else if (pathName.includes('projects')) {
      this.setState({active: 'Projects'})
    } else if (pathName.includes('contact')) {
      this.setState({active: 'Contact'})
    } else {
      this.setState({active: 'Home'})
    }
  }

  mouseEnter = (event) => {
    let el
    el = this.whichNav(event, el)
    let isVisible = getComputedStyle(el).getPropertyValue('visibility')
    el.classList.remove('text-hide')
    if(isVisible === 'hidden') {
      el.classList.add('text-show')
    }
  }

  mouseLeave = (event) => {
    let el
    el = this.whichNav(event, el)
    let isVisible = getComputedStyle(el).getPropertyValue('visibility')
    if (el.classList.contains('text-hide')) {
      el.classList.remove('text-show')
    }
    if (isVisible === 'visible') {
      el.classList.add('text-hide')
    }
  }

  navClick = (event) => {
    let el
    this.refs[this.state.active].classList.add('text-show', 'text-hide')
    if (event.target.classList.contains('projects-btn')) {
      el = this.refs[event.target.innerText.slice(0, 1) + event.target.innerText.slice(1, 8).toLowerCase()]
    } else {
      el = this.whichNav(event, el)
    }
    this.setState({active: el.textContent.slice(0, 1) + el.textContent.slice(1).toLowerCase()})
    el.classList.remove('text-hide')
    el.classList.add('text-show')
  }

  whichNav = (event, el) => {
    if (event.target.nodeName === 'A') {
      el = event.target.children[1]
    } else if (event.target.nodeName === 'DIV') {
      el = event.target
    } else {
      el = event.target.nextSibling
    }
    return el
  }


  render() {
    return (
      <div className="App">
        <div className='sidebar'>
          <nav className='nav'>
            {this.state.routes.map((item) => (
              <NavLink
                exact
                to={item.path}
                key={item.name}
                className={'nav-item ' + item.name}
                activeClassName='active-link show-text'
                onMouseEnter={this.state.active === item.name ? null : this.mouseEnter}
                onMouseLeave={this.state.active === item.name ? null : this.mouseLeave}
                onClick={this.state.active === item.name ? null : this.navClick}
                >
                <span className={item.class}></span>
                <div className='nav-text' ref={item.name}>{item.name}</div>
              </NavLink>
            ))}
            <span className='fa-caret-right arrow'></span>
          </nav>
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
