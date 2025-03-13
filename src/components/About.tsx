import React, { useRef, useEffect } from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import chioma from "../images/jpg/chioma.jpg";

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div ref={aboutRef} className="about-container">
      <div className="about-text">
        <h1>About me</h1>

        <img src={chioma} alt="Chioma Veronica" className="about-mobile-img" />
        <p className="about-paragraph">
          I’m a Frontend Engineer who loves bringing ideas to life on the web.
          With skills in HTML, CSS, JavaScript, React, TypeScript, and Jest, I
          enjoy creating clean, user-friendly interfaces that make apps
          enjoyable to use. I focus on making sure everything works smoothly,
          looks great, and is easy to maintain. I’m always up for a challenge,
          whether it’s solving tough problems or learning something new, and I
          get a real kick out of building innovative solutions that make digital
          experiences better
        </p>
        <NavLink to="/contact" className="about-btn">
          Hire me
        </NavLink>
      </div>
      <img src={chioma} alt="Chioma Veronica" className="about-img" />
    </div>
  );
}
