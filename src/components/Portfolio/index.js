import './style.css'
import React from 'react'
import chart from './assets/Screenshot (420).png'
import crm from './assets/Screenshot (221).png'
import instagramClone from './assets/instagramclone.png'
import aura from './assets/ebike.png'
import ansel from './assets/ansel.png'
import troniclab from './assets/troniclab.png'
import scalehive from './assets/scalehive.png'
import ellevate from './assets/ellevate.png'
import wishcard from './assets/wishcard.png'
import { Link } from 'react-router-dom'
import Cover from '../Cover'

const Portfolio = () => {
  return (
    <Cover>
      <div id="Portfolio" className="portfolio">
        <div className="portfolio_heading">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio_Grid">
          <div>
            <img src={ellevate} alt="olasPortfolio" className="portfoioImg" />
            <h4>
              SME app built for Ecobank with NextJs, Redux and Redux Tool Kit
            </h4>

            <Link
              to={{ pathname: 'https://ellevate.netlify.app' }}
              target={'_blank'}
            >
              Ellevate
            </Link>
          </div>
          <div>
            <img src={wishcard} alt="olasPortfolio" className="portfoioImg" />
            <h4>A Gifting app for a Wishcard Startup</h4>

            <Link to={{ pathname: 'http://wishcard.co' }} target={'_blank'}>
              Wishcard
            </Link>
          </div>
          <div>
            <img
              src={instagramClone}
              alt="olasPortfolio"
              className="portfoioImg"
            />
            <h4>Instagram clone built with ReactJs, and Firebase.</h4>

            <Link
              to={{
                pathname:
                  'https://github.com/Adewusi Adeoye /reactInstagramClone_SocialHub',
              }}
              target={'_blank'}
            >
              GitHub
            </Link>
          </div>
          <div>
            <img src={crm} alt="olasPortfolio" className="portfoioImg" />
            <h4>Carrotsuite CRM Software</h4>
          </div>
          <div>
            <img src={aura} alt="olasPortfolio" className="portfoioImg" />
            <h4>eBike a landing page for a modern bike eCommerce Website</h4>
            <Link
              to={{ pathname: 'https://lucid-mayer-485420.netlify.app/' }}
              target={'_blank'}
            >
              eBike
            </Link>
          </div>
        </div>
      </div>
    </Cover>
  )
}

export default Portfolio
