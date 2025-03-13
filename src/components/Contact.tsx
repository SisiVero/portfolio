import React, { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import './About.css'
import { toast } from 'react-toastify'

export default function Contact() {
  const contactRef = useRef <HTMLDivElement | null> (null)

  const form = useRef <HTMLFormElement | null>(null)

  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

if (!form.current) return
    emailjs
      .sendForm(
        'service_o5hy4ue',
        'template_kqpkffp',
        form.current,
        'Ao45_HDhr1X7Mpdj-',
      )
      .then(
        (result) => {
          toast.success('Your message has been sent successfully, I will respond as soon as possible. Thank you!')
          form.current?.reset()
        },
        (error) => {
          toast.error(
            'An error occured. Pls check your internet connection and try again',
          )
        },
      )
  }

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div ref={contactRef} className="contact-div">
      <h1 className="contact-text">Contact me</h1>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea id="message" name="message" required />
        <button type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  )
}
