
import './style.css'
import React from 'react'
import { Models } from './3DModels';

const Portfolio = () => {
    return (
    <div id="Portfolio" className='portfolio'>
    <div>
      <Models/>

    </div>
    <div className='Portfolio_3dDisplay'>
      <h3>3D Models Display</h3>
    </div>
    </div>
    )
}

export default Portfolio
