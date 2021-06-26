import React from 'react'
import './style.css'
import HorizontalScroll from 'react-scroll-horizontal'

const Portfolio = () => {
    const child = { width: `300em`, height: `100%`}
    return (
    <div className='portfolio'>
        <body>
        <HorizontalScroll>
        <div style={child} />
            <div style={child} />
            <div style={child} />
            <h1>Somethign</h1>
        </HorizontalScroll>
      </body>
 
    </div>
    )
}

export default Portfolio
