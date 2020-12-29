import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
import Loader from "react-loader-spinner"
import ReactDOM from 'react-dom';

class Projects extends Component {
  state = {
    loaded: 0,
    openedProject: null,
    projects: [
      {
        title: 'Release Calendar',
        url: 'https://releases-cd8a7.web.app/',
        github: 'https://github.com/filipsrednicki/releases',
        img: '/img/release-calendar.jpg',
        delay: 100,
        description: 'This app is built using React with Hooks and Context API. It\'s using Firebase Auth for creating and managing users and Realtime Database for storing and managing user\'s data. It\'s also using two API\'s: TMDB for fetching data about movies and tv shows; RAWG for games. Users can search for information about movies, tv shows and games. Once logged in, they can add them to their calendar to keep track of the release date.',
        additionalInfo: 'TEST ACCOUNT: e-mail - test@test.com, password - test123'
      },
      {
        title: 'Neighborhood Map',
        url: 'https://filipsrednicki.github.io/neighborhood-map/',
        github: 'https://github.com/filipsrednicki/neighborhood-map',
        img: '/img/neighborhood-map.jpg',
        delay: 200,
        description: 'Single-page application built using React with addition of GoogleMapsAPI. Functionality of this application includes: map markers, a search function and a list view to support simple browsing of all locations. As well as using FoursquareAPI to provide additional information about each of these locations.'
      },
      {
        title: 'Arcade Game: Frogger',
        url: 'https://filipsrednicki.github.io/arcade-game-frogger/',
        github: 'https://github.com/filipsrednicki/arcade-game-frogger',
        img: '/img/arcade-game.jpg',
        delay: 300,
        description: 'I was provided visual assets and a game loop engine, using these tools I had to add a number of entities to the game including the player character and enemies. Additional functionality: collectibles, score, levels, winning/losing screen.'
      },
      {
        title: 'Memory Game',
        url: 'https://filipsrednicki.github.io/memory-game/',
        github: 'https://github.com/filipsrednicki/memory-game',
        img: '/img/memory-game.jpg',
        delay: 400,
        description: 'The Memory Game Project is all about demonstrating my mastery of HTML, CSS, and JavaScript. I built a browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a shnazzy, well-designed, feature-packed memory game!'
      },
      {
        title: 'MyReads',
        url: 'https://filipsrednicki.github.io/myreads/',
        github: 'https://github.com/filipsrednicki/myreads',
        img: '/img/myreads.jpg',
        delay: 500,
        description: 'In this project, I had to create a bookshelf app (using React) that allows a user to select and categorize books he/she has read, are currently reading, or want to read. I was provided with an API server and client library that\'s used to persist information as user interacts with the application.'
      },
      {
        title: 'Restaurant Reviews',
        url: 'https://filipsrednicki.github.io/mws-restaurant-stage-1/',
        github: 'https://github.com/filipsrednicki/mws-restaurant-stage-1',
        img: '/img/restaurant-reviews.jpg',
        delay: 600,
        description: 'I was provided code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It didn’t include any accessibility features and work offline at all. My task was to resolve these issues while still maintaining the included functionality.'
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

  handleImageLoad = () => {
    this.setState((state) => ({
      loaded: state.loaded + 1
    }))
  }

  render () {
    return(
      <div className='content-projects'>
        <Zoom><h1 className='main-heading'>Projects</h1></Zoom>
        <Slide right><hr className='separator'/></Slide>
        <Loader
          type="Oval"
          color="#F66031"
          height={100}
          width={100}
          visible={this.state.loaded < this.state.projects.length}
        />
        <div className='load-grid' style={{ visibility: this.state.loaded === this.state.projects.length && "visible" }}>
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
                  <div className="btn-container">
                    <span title="Read More" className='more fab fa-info-circle' onClick={() => this.openModal(project)} role='button' tabIndex='0'></span>
                    <a href={project.github} role='button' tabIndex='0' target="_blank" title="Github repository"><span className='github fab fa-github-square'></span></a>
                    <a href={project.url} role='button' tabIndex='0' target="_blank" title="Live demo"><span className='visit fas fa-link'></span></a>
                  </div>
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
                  <p className='modal-text'>{this.state.openedProject.additionalInfo}</p>
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
