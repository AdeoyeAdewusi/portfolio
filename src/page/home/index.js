import React from 'react'
import '../home/style.css'
import { Topview, Portfolio, Resume, Contact } from '../../components'
import Aboutcomp from '../../components/aboutComp'
import Fade from 'react-reveal/Fade'

const Home = () => {
  return (
    <div>
      <Topview />

      <Fade>
        <Aboutcomp />
      </Fade>
      <Resume />
      <Fade>
        <Portfolio />
      </Fade>
      <Contact />
    </div>
  )
}

export default Home
