import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import ReactDOM from 'react-dom';

class Projects extends Component {
  state = {
    loaded: [],
    openedProject: null,
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

  openModal = (project) => {
    this.setState({ openedProject: project})
  }

  closeModal = (e) => {
    if(e.currentTarget === e.target) {
      this.setState({ openedProject: null })
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
                  <span className='more' onClick={() => this.openModal(project)} role='button' tabIndex='0'>Read more</span>
                  <a href={project.url} role='button' tabIndex='0' target="_blank"><span className='visit'>View site</span></a>
                </div>
              </div>
            ))}
          </div>

          {this.state.openedProject && (
            <div className="modal" onClick={this.closeModal}>
              <div className='modal-content'>
                <div className='project-info'>
                  <img src={this.state.openedProject.img} className='modal-img' alt={this.state.openedProject.title}/>
                  <h1>{this.state.openedProject.title}</h1>
                  <p className='modal-text'>{this.state.openedProject.description}</p>
                </div>
                <div className='modal-buttons'>
                  <a href={this.state.openedProject.url} target="_blank"><span className='mb-view' role='button'>View site</span></a>
                  <span className='mb-close' onClick={() => this.setState({openedProject: null})} role='button'>Close</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    )
  }
}

export default Projects;
