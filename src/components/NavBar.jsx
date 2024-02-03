import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import './NavBar.css'

export default function NavBar({ toggleTheme, theme }) {
  const [menu, setMenu] = useState(false)
  const navRef = useRef(null)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  useEffect(() => {
    const handleNavClick = (e) => {
      if (!navRef.current.contains(e.target)) {
        closeMenu()
      }
    }

    // Attach the event listener to the entire document
    document.addEventListener('click', handleNavClick)

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleNavClick)
    }
  }, [])

  return (
    <nav className="nav-bar" ref={navRef}>
      <p className="logo">
        <Link to="/" exact>
          Chioma Veronica
        </Link>{' '}
      </p>
      {menu ? (
        <p className="mobile-menu" onClick={toggleMenu}>
          close
        </p>
      ) : (
        <p className="mobile-menu" onClick={toggleMenu}>
          menu
        </p>
      )}

      <ul className={`navbar-list ${menu ? 'openMenu' : ''}`}>
        <li>
          <NavLink to="/" exact className="list-item" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="list-item"
            activeClassName="active"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="list-item"
            activeClassName="active"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="list-item"
            activeClassName="active"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
        <li className="list-item theme-text">
          <label>{theme === '' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'dark'}
            className="switch"
          />
        </li>
      </ul>
    </nav>
  )
}
