
import './style.css'
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.net.min'

const Portfolio = () => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(BIRDS({
          el: myRef.current
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
    <div>
     <div>
        <div ref={myRef}>
        </div>
    </div>
    <div>

    </div>
    </div>
    )
}

export default Portfolio
