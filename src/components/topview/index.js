import React from 'react'
import { RainEffect } from 'react-background-animation'
import Particles from "./dots";
import ReactTypingEffect from 'react-typing-effect';
import './style.css'
 
const Topview = () => {
  return (
    <div className="topView">
      <RainEffect/>
      <div className='par'>
      <Particles/>
      </div>
    <div className='topView_Stuff'>
      <div className='topView_NameDiv'>
          <h1 className='topView_Name'>Agbaje Olayiowla</h1>
      </div>

    <ReactTypingEffect
      text={["Full Stack Web Developer And 3D Designer"]}
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
<div className='topView_Skills'>
    <div className='topView_Htmlcss'>
        <p>Html/Css</p>
    </div>
    <div className='topView_React'>
        <p>ReactJs</p>
    </div>
    <div className='topView_React'>
        <p>NextJs</p>
    </div>
    <div className='topView_ReactN'>
        <p>React Native</p>
    </div>
    <div className='topView_Php'>
        <p>PHP</p>
    </div>
    <div className='topView_FM'>
        <p>Firebase/MySql</p>
    </div>
    <div className='topView_Git'>
        <p>Git</p>
    </div>
    <div className='topView_Blend'>
        <p>Blender3D</p>
    </div>
  </div>
    </div>
</div>
  );
}
 
export default Topview;