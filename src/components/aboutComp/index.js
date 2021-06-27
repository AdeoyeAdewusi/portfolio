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
        <p className='aboutComp_abs'>
            FULL STACK WEB DEVELOPER A Dynamic, Team Spirited And PerformanceDriven Professional With Extraordinary Blend Of Innovation and Design with
            Process and Performance Improvement An innovative and forward-thinking full
            stack web developer offering over three years of widespread experience and a
            documented track record of success in both front end and back end
            development,. Accustomed to working under fast-paced, high-volume,
            time-sensitive conditions. Ability to manage multiple responsibilities
            simultaneously, efficiently resolve issues, and consistently exceed established
            goals. Knowledgeable Full stack web Developer adept at creating successful
            websites that meet customer needs. Specializing in collaborating with customers
            to gather requirements, produce plans and improve designs for usability and
            functionality. Fully proficient in ReactJs, NextJs, PHP, NodeJs and Semantic
            HTML/CSS. Enthusiastic developer eager to contribute to team success through
            hard work, attention to detail and excellent organizational skills. Motivated to
            learn, grow and excel in the web development industry.
        </p>
    </div>

        </div>
    )
}

export default Aboutcomp
