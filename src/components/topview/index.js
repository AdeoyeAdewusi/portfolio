import React from 'react'
import { RainEffect } from 'react-background-animation'
import Particles from './dots'
import ReactTypingEffect from 'react-typing-effect'
import './style.css'
import { Link } from 'react-router-dom'

const Topview = () => {
  return (
    <div className="topView">
      <RainEffect />
      <div className="par">
        <Particles />
      </div>
      <div className="topView_Stuff">
        <div className="topView_NameDiv">
          <h1 className="topView_Name">Adewusi Olayiowla</h1>
        </div>

        <ReactTypingEffect
          text={['Full Stack Web Developer And 3D Designer']}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h4>
                {text.split('').map((char, i) => {
                  const key = `${i}`
                  return (
                    <span key={key} className="topView_TypeText">
                      {char}
                    </span>
                  )
                })}
              </h4>
            )
          }}
        />
        <div className="topView_Skills">
          <div className="topView_Htmlcss">
            <p>Html/Css</p>
          </div>
          <div className="topView_React">
            <p>ReactJs</p>
          </div>
          <div className="topView_React">
            <p>NextJs</p>
          </div>
          <div className="topView_ReactN">
            <p>React Native</p>
          </div>
          <div className="topView_Php">
            <p>PHP</p>
          </div>
          <div className="topView_FM">
            <p>Firebase/MySql</p>
          </div>
          <div className="topView_Git">
            <p>Git</p>
          </div>
          <div className="topView_Blend">
            <p>Blender3D</p>
          </div>
        </div>
        <div className="mh2">
          <h2 style={{ color: 'white' }}>Click Here For My Projects</h2>
        </div>
        <div className="contscts">
          <Link
            to={{ pathname: ' https://github.com/Adewusi Adeoye ' }}
            target={'_blank'}
          >
            <svg
              className="gitH"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 291.32 291.32"
              style={{ enableBackground: 'new 0 0 291.32 291.32' }}
              width="100px"
              space="preserve"
            >
              <g>
                <path
                  d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66
		s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235
		c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3
		c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0
		c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572
		c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425
		c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263
		c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184
		C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66
		C264.008,196.668,231.69,239.992,186.462,256.625z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </Link>
          <Link
            to={{
              pathname:
                'https://www.linkedin.com/in/Adeoye -Adewusi -220a10169/',
            }}
            target={'_blank'}
          >
            <svg
              className="linkedin"
              height="50px"
              viewBox="0 0 512 512"
              width="50px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Topview
