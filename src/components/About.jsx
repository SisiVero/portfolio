import React, {useRef, useEffect} from 'react'
import "./About.css"
import {NavLink} from "react-router-dom"


export default function About() {
  const aboutRef = useRef(null)
  useEffect(()=>{
    if(aboutRef.current){
      aboutRef.current.scrollIntoView({behavior:'smooth'})
    }
  })
  return (
    <div ref={aboutRef} className="about-container">
      <div className='about-text'>
        <h1>About me</h1>
        
      <img src="./about.jpg" alt="Chioma Veronica" className="about-mobile-img" />
        <p className='about-paragraph'>
          As a frontend developer, I construct web interfaces and design systems with the users in mind. I enjoy coding things from scratch as well as bringing ideas to life.
        </p>
        <NavLink to="/contact" className='about-btn'>Hire me</NavLink>
      </div>
      <img src="./about.jpg" alt="Chioma Veronica" className="about-img" />
    </div>
  )
}
