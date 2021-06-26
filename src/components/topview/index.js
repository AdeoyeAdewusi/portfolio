import React from 'react'
import { RainEffect } from 'react-background-animation'
import ReactTypingEffect from 'react-typing-effect';
import './style.css'
 
const Topview = () => {
  return (
    <div className="topView">
      <RainEffect/>
      <div className='topView_NameDiv'>
          <h1 className='topView_Name'>Agbaje Olayiowla</h1>
      </div>

    <ReactTypingEffect
      text={["I Am A Full Stack Web Developer And 3D Designer"]}
      cursorRenderer={cursor => <h1>{cursor}</h1>}
      displayTextRenderer={(text, i) => {
        return (
          <h4>
            {text.split('').map((char, i) => {
              const key = `${i}`;
              return (
                <span
                  key={key}
                  className='topView_TypeText'
                >{char}</span>
              );
            })}
          </h4>
        );
      }}        
    />
</div>
  );
}
 
export default Topview;