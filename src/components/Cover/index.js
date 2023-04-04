import React from 'react'
import './styles.css'

const Cover = ({ children }) => {
  return (
    <div className="outer">
      <div className="inner">{children}</div>
    </div>
  )
}

export default Cover
