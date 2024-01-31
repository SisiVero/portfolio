import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { FaSun, FaMoon } from 'react-icons/fa'
import './NavBar.css'

export default function NavBar({ toggleTheme, theme }) {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.closest('nav.nav-bar')) {
        closeMenu()
      }
    }
    // Attach the event listener to the entire nav element
    document.addEventListener('click', handleNavClick)

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleNavClick)
    }
  }, [])
  return (
    <nav className="nav-bar">
      <p className="logo">Chioma Veronica </p>
      {menu ? (
        <p className="mobile-menu" onClick={toggleMenu}>
          close
        </p>
      ) : (
        <p className="mobile-menu" onClick={toggleMenu}>
          menu
        </p>
      )}

      <ul className={`navbar-list ${menu ? 'openMenu' : ''} `}>
        <li>
          <NavLink to="/" exact className="list-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="list-item" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="list-item"
            activeClassName="active"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="list-item" activeClassName="active">
            Contacts
          </NavLink>
        </li>
        <li className="list-item theme-text">
          <label>{theme === '' ? 'Dark Mode' : 'Light Mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className="switch"/>
        </li>
      </ul>
    </nav>
  )
}
