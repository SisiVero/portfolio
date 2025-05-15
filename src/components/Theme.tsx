import React, { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Theme() {
  const setDarkmode = ()=> {
document.querySelector('body')?.setAttribute('data-theme', 'dark')
 localStorage.setItem("selectedTheme", "dark")
}
  const setLightmode = ()=> {
    document.querySelector('body')?.setAttribute('data-theme', 'light')
    localStorage.setItem("selectedTheme", "light")
}

const selectedTheme = localStorage.getItem("selectedTheme")
if(selectedTheme === "dark"){
    setDarkmode()
}

const toggleTheme =(e: { target: { checked: any } })=>{
    if (e.target.checked) setDarkmode()
        else setLightmode()
}

  return (
    // <div className={darkTheme ? 'dark-theme' : ''}>
    //   <button>{darkTheme ? <FaSun /> : <FaMoon />}</button>
    // </div>
    <div>
        <input
        className='dark-moe-input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
        />
        <label className='darkmode-label' htmlFor='darkmode-toggle'>
            <FaSun/>
            <FaMoon/>
        </label>
    </div>
  )
  }


