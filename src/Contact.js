import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import ReactFitText from 'react-fittext'

class Contact extends Component {

  formSubmitted = (event) => {
    event.target.firstChild.classList.add('show-thanks')
  }

  closeThanks = (event) => {
    event.target.parentElement.parentElement.reset()
    event.target.parentElement.classList.remove('show-thanks')
  }

  render () {
    return(
      <div className='contact'>
        <ReactFitText maxFontSize={79} minFontSize={42}>
          <h1 className='main-heading'><Zoom cascade top>Contact Me</Zoom></h1>
        </ReactFitText>
        <Fade left><hr className='separator'/></Fade>
        <Fade delay={200} duration={3000}><p>To contact me you can use the form below or simply e-mail me at: <span className='p-email'>srednifilipq@gmail.com</span></p></Fade>
        <Zoom>
        <form name='gform' id='gform' encType='text/plain' action='https://docs.google.com/forms/d/e/1FAIpQLSff-I3sXKTHvt4xI_ix5Lixsw43oCgBYfs-A47_QGc_HZCg2w/formResponse?' target='hidden_iframe' onSubmit={this.formSubmitted}>
          <div className='contact-thanks'>
            <h1>Message has been sent!</h1>
            <p>Thank you! I will contact you as soon as I can (up to 24h).</p>
            <div className='thanks-btn' onClick={this.closeThanks} role='button'>Return</div>
          </div>

          <label>Name
            <input type='text' name='entry.2005620554' className='input-name' id='entry.2005620554' placeholder='Name' required autoComplete='name'/>
            <span className='input-border'></span>
          </label>
          <label>E-mail
            <input type='email' name='entry.629146563' className='input-email' id='entry.629146563' placeholder='E-mail' required autoComplete='email'/>
            <span className='input-border'></span>
          </label>
          <label>Subject
            <input type='text' name='entry.1566165696' className='input-subject' id='entry.1566165696' placeholder='Subject' required/>
            <span className='input-border'></span>
          </label>
          <label>Message
            <textarea type='text' name='entry.960914045' className='input-msg' id='entry.960914045' placeholder='Your message...' rows='10' required/>
            <span className='input-border'></span>
          </label>
          <input type='submit' className='input-submit' value='Send'/>
          <input type='reset' className='input-reset' value='Clear'/>
        </form>
        </Zoom>
        <iframe name='hidden_iframe' id='hidden_iframe' title='hidden' style={{display:'none'}} onLoad={this.submitted && console.log('yes')}></iframe>
      </div>
    )
  }
}

export default Contact;
