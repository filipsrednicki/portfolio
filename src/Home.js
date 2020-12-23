import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactFitText from 'react-fittext'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

class Home extends Component {
  render () {
    return(
      <div className='home'>
        <div className='heading-home'>
          <ReactFitText maxFontSize={22} compressor={1.8}>
            <h3><Zoom cascade>Hello, world!</Zoom></h3>
          </ReactFitText>

          <ReactFitText maxFontSize={79} minFontSize={30}>
            <h1><Bounce cascade>I'm Filip Średnicki</Bounce></h1>
          </ReactFitText>

          <ReactFitText maxFontSize={19} compressor={2}>
            <h2><Zoom left cascade>Front-End Developer</Zoom></h2>
          </ReactFitText>
        </div>

        <Fade delay={150} duration={2000}><hr /></Fade>

        <div className='home-right'>
          <Zoom delay={150} duration={2000}>
          <Link
            to='/projects'
            className='projects-btn'
            role='button'
            >
            Projects
          </Link>
          </Zoom>
        </div>
      </div>
    )

  }
}

export default Home;
