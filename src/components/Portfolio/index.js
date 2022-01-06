
import './style.css'
import React from 'react'
import chart from './assets/Screenshot (420).png'
import crm from './assets/Screenshot (221).png'
import instagramClone from './assets/instagramclone.png'
import aura from './assets/Screenshot (421).png'
import ansel from './assets/ansel.png'
import troniclab from './assets/troniclab.png'
import scalehive from './assets/scalehive.png'
import { Link } from "react-router-dom";

const Portfolio = () => {

    
    return (
    <div id="Portfolio" className='portfolio'>
           <div className='portfolio_heading'>
            <h2>Portfolio</h2>
        </div>
        <div  className='portfolio_Grid'>
 
            <div>
               <img src={instagramClone} alt='olasPortfolio' className='portfoioImg'/> 
               <h4>Instagram clone built with ReactJs, and Firebase.</h4>
               
               <Link to={{ pathname: 'https://github.com/agbajeolayiwola/reactInstagramClone_SocialHub' }} target={'_blank'}>GitHub</Link>
            </div>
            <div>
                <img src={chart} alt='olasPortfolio' className='portfoioImg'/>  
                <h4>A chart that monitors assets in a factory in real time</h4>  
                          
            </div>
            <div>
                <img src={crm} alt='olasPortfolio' className='portfoioImg'/>
                <h4>Carrotsuite CRM Software</h4>
                
            </div>
            <div>
                <img src={aura} alt='olasPortfolio' className='portfoioImg'/>
                <h4>ReactJs news website built for a client</h4>
            </div>
            
        </div>

        <div  className='portfolio_Grid'>
 
            <div>
               <img src={instagramClone} alt='olasPortfolio' className='portfoioImg'/> 
               <h4>Instagram clone built with ReactJs, and Firebase.</h4>
               
               <Link to={{ pathname: 'https://github.com/agbajeolayiwola/reactInstagramClone_SocialHub' }} target={'_blank'}>GitHub</Link>
            </div>
            <div>
                <img src={ansel} alt='olasPortfolio' className='portfoioImg'/>  
                <h4>Ansel page design adapted from figma board</h4>  
                
                <Link to={{ pathname:'https://ansel-admin-site.netlify.app/'}} target={'_blank'}>Hosted Page</Link>          
            </div>
            <div>
                <img src={troniclab} alt='olasPortfolio' className='portfoioImg'/>
                <h4>Full functioning troniclab website built with HTML/CSS, Javascript, and PHP for Contact</h4>
                
                <Link to={{ pathname:'http://troniclab.com/'}} target={'_blank'}>Troniclab Website</Link>
            </div>
            <div>
                <img src={scalehive} alt='olasPortfolio' className='portfoioImg'/>
                <h4>LinkedIn Type Social Media Built with HTML/CSS, Javascript, PHP, and MySql for handling database</h4>
                
                <Link to={{ pathname:'https://www.scalehive.co'}} target={'_blank'}>SCalehive Website</Link>
            </div>
            
        </div>
    </div>
    )
}

export default Portfolio
