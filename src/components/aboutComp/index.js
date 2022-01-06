import React from 'react'
import './style.css'
import sidePic from '../../assets/FullSizeRender-104-removebg-preview.png'

const Aboutcomp = () => {
    return (
        <div id='About'>
            <div className='abputme'>
                <h2>About Me</h2>
            </div>
        <div  className='aboutComp' >
        <div className='aboutComp_img'>
            <img 
            alt='agbaje olayiwola' 
            src={sidePic}/>
        </div>
    <div className='aboutComp_ab'>
        <p className='aboutComp_abs'>
           I am a<strong> FULL STACK WEB DEVELOPER A Dynamic,</strong> in Lagos, Nigeria i specialize in front end development using
           HTML, CSS and javascript , i focus on learning new technologies and being up to date on all the latest frameworks.
        </p>
    </div>
    </div>

        </div>
    )
}

export default Aboutcomp
