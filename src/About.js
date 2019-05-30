import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import ReactFitText from 'react-fittext'

class About extends Component {
  render () {
    return(
      <div className='about-page'>

        <div className='about-text' key='unique'>
          <ReactFitText maxFontSize={79} minFontSize={42}>
            <h1 className='main-heading'><Zoom cascade top>About me</Zoom></h1>
          </ReactFitText>
          <Fade left delay={200}>
            <p>
              My first encounter with HTML and some basic CSS was back in middle school. After middle school I attended Technical High School for Computer Science where my knowledge of these technologies got a bit more expanded.
            </p>
          </Fade>
          <Fade left delay={350}>
            <p>
              It took me a while to figure out that Web Development is actually what I want to do in life. So eventually I took an Udacity's Front-End Developer course that helped me master my HTML and CSS skills, taught me JavaScript (including jQuery library) and basics of frameworks like React and Angular. To complete the program and receive a certificate I had to build several projects and have them accepted by reviewers.
            </p>
          </Fade>
        </div>

        <div className='about-certificate'>
          <a href='https://confirm.udacity.com/HEGVMXKA'>
            <Zoom delay={300}>
              <img src='/portfolio/img/fend-certificate.svg' alt='Front End Nanodegree Certificate'/>
            </Zoom>
          </a>
        </div>
      </div>
    )

  }
}

export default About;
