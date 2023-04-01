import React from 'react'
import './style.css'
import { useHorizontalScroll } from './sideScroll'
import Particles from '../topview/dots'
const Resume = () => {
  const scrollRef = useHorizontalScroll()

  const element = document.querySelector('#container')
  if (element) {
    element.addEventListener('wheel', (event) => {
      event.preventDefault()

      element.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      })
    })
  }
  return (
    <div
      className="Resume"
      id="Resume"

      // ref={scrollRef}
      // style={{ overflow: 'auto' }}
    >
      <div className="part">
        <Particles />

        <div
          className="resume_b"
          style={{ whiteSpace: 'nowrap' }}
          id="container"
        >
          <div className="resume_Block1">
            <div className="resume_Block1Head">
              WEB DEVELOPER 01/2018 to CURRENT SELF – Yaba Lagos | Lagos, LA
              Major Benchmarks:.
            </div>
            <div className="resume_Block1_BM">
              <ul>
                <li>
                  Built and deployed Instagram clone using ReactJs and
                  firebase,.
                </li>
                <li>Efficiently deployed PWA (Progressive Web App).</li>
                <li>
                  Manually Registered Service Worker to better assist netlify to
                  host NextJs
                </li>
                <li>
                  PWA's(Progressive Web App). https://github.com/Adewusi Adeoye{' '}
                </li>
                <li>Adewusi Adeoye .netlify.app</li>
                <li>
                  Created Web Page with intractable 3D objects using ThreeJs.
                </li>
                <li>
                  Created multiple professional mobile and web designs using
                  AdobeXD.
                </li>
                <li>Integrated firebase firestore database ina web app.</li>
                <li>Deployed web app efficiently on firebase network.</li>
              </ul>
            </div>
          </div>

          <div className="resume_Block2">
            WEB DEVELOPER 01/2018 to CURRENT TRONICLAB – Yaba Lagos | Lagos, LA
            Major Benchmarks:
            <ul>
              <li>
                {' '}
                Leveraged web development practice experience and comprehensive
                knowledge to professionally assemble, install, test, and build
                website from start to finish.
              </li>
              <li>
                Influenced customer satisfaction score by Integrating website
                for mobile.
              </li>
              <li>
                Mounted strategies for the on-page search engine optimization.
              </li>
              <li>
                Paved way for the website to be ranked high on google search.
              </li>
              <li>Solicited to design 3D models.</li>
              <li>
                Designed developed and coded earlier versions of website which
                had a database of comments, users, and posts.
              </li>
              <li>Regularly update website and add new pages.</li>
              <li>
                Handpicked to build website commercial section from scratch to
                finished product (ongoing project).
              </li>
              <li>
                Currently implementing payment gateway for Lampix Smart
                Projector.
              </li>
            </ul>
          </div>

          <div className="resume_Block3">
            FULL STACK WEB DEVELOPER 01/2018 to 06/2019 EASYTRANSPORT.COM.NG |
            Lagos, LA
            <ul>
              <li>Charged with design of company logo.</li>
              <li>
                Built Company website from scratch using HTML CSS JavaScript and
                Jquery;.
              </li>
              <li>
                Enhanced quality outcomes by building company contact form using
                PHP to connect between Cpanel email and website contact form.
              </li>
              <li>
                Aligned organization for growth by increasing search appearances
                using meta content tags in website's files for better SEO.
              </li>
            </ul>
          </div>
          <div className="resume_Block4">
            FREELANCE FRONT END DEVELOPER 01/2017 to 03/2019 Self Employed Web |
            Lagos, Lagos, Nigeria
          </div>
        </div>
      </div>

      <div className="resume_T">
        <div className="resume_Technologies">
          <h2>Technologies</h2>
        </div>
        <div className="resume_TechList">
          <ul className="resume_TechUl1">
            <li>Semantic HTML</li>
            <li>JSX</li>
            <li>ReactJs</li>
          </ul>
          <ul className="resume_TechUl2">
            <li>NodeJs</li>
            <li>PHP</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume
