import React, {useState, useEffect} from 'react'
import './Footer.css'
import { MdEmail } from 'react-icons/md';
import {
  FaGithub,
  FaCodepen,
  FaTwitter,
  FaLinkedin,
  FaBehance,
} from 'react-icons/fa'

export default function SocialIcons() {
  const email = 'veronicaezezim@gmail.com'
  return (
    <div className="links-div">
      <div className='links'>
      <a
        href="https://github.com/SisiVero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="social-link" />
      </a>
      <a
        href="https://codepen.io/SisiVero"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaCodepen className="social-link" />
      </a>
      <a
        href="https://twitter.com/Sisiivero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="social-link" />
      </a>
      <a
        href="https://www.linkedin.com/in/chioma-veronica-ezezim/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="social-link" />
      </a>
      <a
        href="https://www.behance.net/sisivero"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FaBehance className="social-link" />
      </a>
      <a href={`mailto:${email}`} >
        <MdEmail className="social-link" />
      </a>
      </div>
      <div>
        <p className='footer-text'>Chioma Veronica &#169; {new Date().getFullYear()}</p>
      </div>
      {/* <button onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button> */}
    </div>
  )
}
