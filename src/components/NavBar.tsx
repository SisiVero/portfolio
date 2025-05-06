import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import "./NavBar.css";
import { NavBarProps } from "../types";

export default function NavBar({ toggleTheme, theme }: NavBarProps) {
  const [menu, setMenu] = useState(false);
  const navRef = useRef<HTMLLinkElement | null>(null);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        closeMenu();
      }
    };

    // Attach the event listener to the entire document
    document.addEventListener("click", handleNavClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <nav className="nav-bar" ref={navRef}>
      <p className="logo">
        <Link to="/">Chioma Veronica</Link>{" "}
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

      <ul className={`navbar-list ${menu ? "openMenu" : ""}`}>
        <li>
          <NavLink to="/" className="list-item" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "list-item active" : "list-item"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
