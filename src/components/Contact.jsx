import React, { useState,useEffect, useRef } from 'react'
import {NavLink} from "react-router-dom"
import './Contact.css'
import "./About.css"

export default function Contact({darkTheme}) {
  // State variables to store f
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const contactRef = useRef(null)
useEffect(()=>{
  if(contactRef.current){
    contactRef.current.scrollIntoView({bahvior: 'smooth'})
  }
})

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div ref={contactRef} className='contact-div'>
      <h1 className="contact-text">Contact me</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label for="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
