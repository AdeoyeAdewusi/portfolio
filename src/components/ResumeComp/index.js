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
  const data = [
    {
      title: ' FRONT END DEVELOPER',
      date: 'December 2022 - March 2023 ',
      place: 'Contract | WishCard | Lagos, LA',
      joblist: [
        'Integrated the UX/UI design with pixel-perfect accuracy for a gifting app startup, resulting in a 20% increase in user engagement.',
        'Developed a component using the ffmpeg library to convert an array of images into a video with dynamic text, resulting in a 30% increase in user-generated content.',
        'Integrated the backend with the frontend in record time, reducing development time by 40%.',
        'Created a custom audio recording component that enabled users to record and save audios to the backend, resulting in a 25% increase in user retention.',
        'Added 3D cards using ThreeJs, resulting in a 15% increase in user engagement and a 20% increase in user-generated content.',
        'Implemented authentication for user accounts using JWS token with expiring cookies, resulting in a 50% reduction in unauthorized access attempts.',
        'Used code to add animations to 3D models, assisting the 3D designer and resulting in a 30% reduction in development time.',
        'Created multiple Wishcards, enabling users to combine audio and images to create videos for sharing with their loved ones and friends, resulting in a 35% increase in user engagement and a 20% increase in user-generated content.',
      ],
    },
    {
      title: ' FRONT END DEVELOPER',
      date: 'June 2021 - June 2022',
      place: 'CODEMANIA | Lagos, LA',
      joblist: [
        'Developed the architecture for an SME (small and medium enterprise) Web app finance app which was 100% sclalable.',
        'Engineered the redux architecture for scalability using redux toolkit for Nextjs wich made working with global state 100% easier.',
        ' Efficiently intigerated the front end with the backend api.',
        'Made development more streamlined by making highly reusable components and global styling for common element such as buttons and inputs, increasing product development time by 60%.',
        'Integrated several JSON files into the front end such as Nigerian states and local govermments for location inputs.',
        'Integrated a liveness test which checks if the person registering on the app is a real person and facematch which checks if the image taken from the liveness test and matches the image attached to the users documents such as NIN and BVN (bank verification number), using a third party SDK this increased security on the app by 80%.',
        'Expertly used React-Hook-Forms and Regex for form validations, hookforms was used to reduce the amlount of rerenders on the app, increasing efficiency by 70%.',
        'Used Framer motion to make the app more visually pleasing by animating several sections of the app and page transitions.',
        'Integrated chartjs to better visualize financial data for the user.',
        'Efficiently integrated UI/UX designs from figma into fully working web application.',
        'Solved several logical problems which includes unique problems which arises from using nextjs which uses server side rendering.',
        'Made a password encryption function and a higher order component to protect routes that can only be accessed when the user is logged in.',
      ],
    },
    {
      title: 'WEB DEVELOPER',
      date: 'January 2020 - June 2021',
      place: 'Yaba Lagos | Lagos, LA',
      joblist: [
        'Formulated a template page which used a kind of pseudo database on the frontend to render views for the user, this helped the page load faster and give the end user a more seamless experience',
        'Situated the web app on both netlify and vercel to allow client to easily monitor the progress of the project.',
        'Streamlined the styling process by making use of css global variable and styled compoenets on a side project for the senior front end engineer.',
        'Worked cloasely with a senior software engineer to get new pages/products tested and working and addressed any issues with 48 hours.',
        'Leveraged Knowledge nd experience to debug multiple reactjs compoenents and performed end-to-end testing using the Jest testing library.',
        'Implemented several svg animations and microinteractions using both pure css and the Frammer Motion library for reactjs and nextjs.',
        'Efficiently deployed PWA (Progressive Web App).',
        'PWAs(Progressive Web App). https://github.com/AdewusiAdeoye',
        'Created Web Page with intractable 3D objects using ThreeJs.',
        'Integrated firebase firestore database ina web app.',
        'Deployed web app efficiently on firebase network.',
      ],
    },
    {
      title: ' WEB DEVELOPER  TRONICLAB',
      date: 'February 2018 - Decemmber 2019',
      place: 'Yaba Lagos | Lagos, LA',
      joblist: [
        'Leveraged web development practice experience and comprehensive  knowledge to professionally assemble, install, test, and build website from start to finish.',
        'Influenced customer satisfaction score by Integrating website for mobile.',
        ' Mounted strategies for the on-page search engine optimization.',
        ' Paved way for the website to be ranked high on google search.',
        'Created Web Page with intractable 3D objects using ThreeJs.',
        'Solicited to design 3D models.',
        ' Designed developed and coded earlier versions of website which had a database of comments, users, and posts.',
        'Regularly update website and add new pages.',
        'Handpicked to build website commercial section from scratch to finished product (ongoing project).',
        'Currently implementing payment gateway for Lampix Smart Projector.',
      ],
    },
    {
      title: ' FULL STACK WEB DEVELOPER ',
      date: 'February 2016 - Jnuary 2018',
      place: 'EASYTRANSPORT.COM.NG | Lagos, LA',
      joblist: [
        'Charged with design of company logo.',
        'Built Company website from scratch using HTML CSS JavaScript and Jquery;.',
        ' Enhanced quality outcomes by building company contact form using PHP to connect between Cpanel email and website contact form.',
        'Aligned organization for growth by increasing search appearances using meta content tags in websites files for better SEO.',
      ],
    },
  ]
  return (
    <div
      className="Resume"
      id="Resume"

      // ref={scrollRef}
      // style={{ overflow: 'auto' }}
    >
      <div className="part">
        <Particles />

        <div className="resummeGrids">
          {data.map((item, index) => {
            return (
              <div className="resumeListsCover">
                <div className="titleDate">
                  <h1>{item.title}</h1>
                  <p>{item.date}</p>
                </div>
                <p>{item.place}</p>
                <ul>
                  {item.joblist.map((joblists, index) => {
                    return <li>{joblists}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      {/* <div className="resume_T">
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
      </div> */}
    </div>
  )
}

export default Resume
