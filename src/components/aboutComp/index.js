import React from 'react'
import './style.css'
import sidePic from '../../assets/IMG_0133-removebg-preview.png'

const Aboutcomp = () => {
    return (
        <div className='aboutComp' id='About'>
        <div className='aboutComp_img'>
            <img 
            alt='agbaje olayiwola' 
            src={sidePic}/>
        </div>
        <div className='aboutComp_ab'>
            <p>
                I am a web developer and 3D designer
            </p>
        </div>

        </div>
    )
}

export default Aboutcomp
