import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import ReactDOM from 'react-dom';

class Projects extends Component {
  state = {
    loaded: [],
    projects: [
      {
        title: 'Neighborhood Map',
        url: 'https://filipsrednicki.github.io/neighborhood-map/',
        img: '/portfolio/img/neighborhood-map.jpg',
        delay: 100,
        description: 'Single-page application built using React with addition of GoogleMapsAPI. Functionality of this application includes: map markers, a search function and a list view to support simple browsing of all locations. As well as using FoursquareAPI to provide additional information about each of these locations.'
      },
      {
        title: 'Arcade Game: Frogger',
        url: 'https://filipsrednicki.github.io/arcade-game-frogger/',
        img: '/portfolio/img/arcade-game.jpg',
        delay: 200,
        description: 'I was provided visual assets and a game loop engine, using these tools I had to add a number of entities to the game including the player character and enemies. Additional functionality: collectibles, score, levels, winning/losing screen.'
      },
      {
        title: 'Memory Game',
        url: 'https://filipsrednicki.github.io/memory-game/',
        img: '/portfolio/img/memory-game.jpg',
        delay: 300,
        description: 'The Memory Game Project is all about demonstrating my mastery of HTML, CSS, and JavaScript. I built a browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!'
      },
      {
        title: 'MyReads',
        url: 'https://filipsrednicki.github.io/myreads/',
        img: '/portfolio/img/myreads.jpg',
        delay: 400,
        description: 'In this project, I had to create a bookshelf app (using React) that allows a user to select and categorize books he/she has read, are currently reading, or want to read. I was provided with an API server and client library that\'s used to persist information as user interacts with the application.'
      },
      {
        title: 'Restaurant Reviews',
        url: 'https://filipsrednicki.github.io/mws-restaurant-stage-1/',
        img: '/portfolio/img/restaurant-reviews.jpg',
        delay: 500,
        description: 'I was provided code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It didn’t include any accessibility features and work offline at all. My task was to resolve these issues while still maintaining the included functionality.'
      },
      {
        title: 'Simple Portfolio',
        url: 'https://filipsrednicki.github.io/simple-portfolio/',
        img: '/portfolio/img/simple-portfolio.jpg',
        delay: 600,
        description: 'Being provided with a design mockup as a PDF-file my task was to replicate that design in HTML and CSS.  I developed a responsive website that displays images, descriptions and links to each of the portfolio projects.'
      }
    ]
  }

  openModal = (event) => {
    let el = event.target
    if (el.classList.contains('mb-close')) {
      el.parentElement.parentElement.parentElement.classList.remove('show-modal')
    }
    if (el.classList.contains('modal')) {
      el.classList.toggle('show-modal')
    } else if (el.parentElement.parentElement.parentElement.nextSibling) {
      el = event.target.parentElement.parentElement.parentElement.nextSibling
      el.classList.toggle('show-modal')
      this.state.projects.forEach((project) => {
        if (project.title === event.target.previousSibling.innerText) {
          el.firstChild.firstChild.innerHTML =
          `<img src=${project.img} class='modal-img' alt='${project.title}'/>
            <h1>${project.title}</h1>
            <p class='modal-text'>${project.description}</p>`
          el.firstChild.children[1].firstChild.href = project.url
        }
      })
    } else {
      return
    }
  }

  handleImageLoad = (event) => {
    let imgAlt = event.target.alt

    if(this.state.loaded.includes(imgAlt)) {
      return
    } else {
      this.setState(() => ({
        loaded: this.state.loaded.concat(imgAlt)
      }))
    }

    if(this.state.loaded.length === 5) {
      ReactDOM.findDOMNode(this.refs.imgGrid).previousSibling.style.visibility = 'hidden'
      ReactDOM.findDOMNode(this.refs.imgGrid).previousSibling.style.opacity = '0'
      ReactDOM.findDOMNode(this.refs.imgGrid).style.visibility = 'visible'
    }

  }

  render () {
    return(
      <div className='content-projects'>
        <Zoom><h1 className='main-heading'>Projects</h1></Zoom>
        <Slide right><hr className='separator'/></Slide>
        <h2 className='p-placeholder'>Loading projects...</h2>
        <div className='load-grid' ref='imgGrid'>
          <div className='projects-grid'>
            {this.state.projects.map((project) => (
              <div
                className='project'
                key={project.title}>
                <div className='project-img'>
                  <Fade delay={project.delay}>
                    <img src={project.img} onLoad={this.handleImageLoad} alt={project.title}/>
                  </Fade>
                </div>
                <div className='hover-img' tabIndex='0'>
                  <span className='project-title'>{project.title}</span>
                  <span className='more' onClick={this.openModal} role='button' tabIndex='0'>Read more</span>
                  <a href={project.url} role='button' tabIndex='0'><span className='visit'>View site</span></a>
                </div>
              </div>
            ))}
          </div>

          <div className='modal' onClick={this.openModal}>
            <div className='modal-content'>
              <div className='project-info'></div>
              <div className='modal-buttons'>
                <a href=''><span className='mb-view' role='button'>View site</span></a>
                <span className='mb-close' role='button'>Close</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Projects;
