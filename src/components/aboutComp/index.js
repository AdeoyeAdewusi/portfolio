import React from 'react'
import './style.css'
import sidePic from '../../assets/fullSize.jpeg'
import Cover from '../Cover'

const Aboutcomp = () => {
  return (
    <div id="About">
      <Cover>
        <div className="abputme">
          <h2>About Me</h2>
        </div>
        <div className="aboutComp">
          <div className="aboutComp_img">
            <img alt="Adewusi  Adeoye " src={sidePic} width="503px" />
          </div>
          <div className="aboutComp_ab">
            <h1 className="name">ADEOYE ADEWUSI</h1>
            <p className="aboutComp_abs">
              I am a<strong> FULL STACK WEB DEVELOPER </strong>
              with over 5years experience. I specialize in front end development
              using HTML, CSS, JavaScript and related technologies. I focus on
              learning new technologies and being up to date on all the latest
              frameworks, with experience in building websites that are
              responsive for all screens. Excellent communicator and effective
              team player . I'm a problem solver and a critical thinker with the
              abilities to brainstorm with teammates to proffer solutions to
              design concepts and ideas for projects.
            </p>
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Aboutcomp
