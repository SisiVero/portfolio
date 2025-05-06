importunity React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className="occupation">Frontend Developer</p>
        <h1 className='hello-text'>Hello, my name is Chioma Veronica Ezezim</h1>
        <p className='intro-text'>
          A frontend developer and interface designer who builds good UI, rich
          accessible and performant websites
        </p>
        <div className='hero-btns'>
        <button className="hire-btn"><Link to="/contact" className="hire-text" >
        Hire me
          </Link></button>
        <button className="work-btn">
          <Link to="/projects" className="work-link">See my work</Link>
        </button>
          </div>
      </div>
    </div>
  )
}
