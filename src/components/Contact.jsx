import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'
import './About.css'

export default function Contact({ darkTheme }) {
  // State variables to store f
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const contactRef = useRef(null)


  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ bahvior: 'smooth' })
    }
  }, [])

  const [state, handleSubmit] = useForm('xnqepngr')
  if (state.succeeded) {
    return <p>Thank you for reaching out. I will respond to you soon!</p>
  }
  console.log(state)



  return (
    <div ref={contactRef} className="contact-div">
      <h1 className="contact-text">Contact me</h1>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          required
        />
        <ValidationError prefix="Email" field="name" errors={state.errors} />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label for="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError prefix="Email" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  )
}
