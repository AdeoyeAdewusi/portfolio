
import './style.css'
import React from 'react'
import chart from './assets/Screenshot (420).png'
import crm from './assets/Screenshot (221).png'
import instagramClone from './assets/instagramclone.png'
import aura from './assets/ebike.png'
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
                <img src={crm} alt='olasPortfolio' className='portfoioImg'/>
                <h4>Carrotsuite CRM Software</h4>
                
            </div>
            <div>
                <img src={aura} alt='olasPortfolio' className='portfoioImg'/>
                <h4>eBike a landing page for a modern bike eCommerce Website</h4>
                <Link to={{ pathname: 'https://lucid-mayer-485420.netlify.app/' }} target={'_blank'}>eBike</Link>
            </div>
            
        </div>

    </div>
    )
}

export default Portfolio
