import { ToastContainer, toast } from 'react-toastify'
import React, { useState, useEffect, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    setTheme((curr) => (curr === '' ? 'dark' : ''))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Router>
          <NavBar theme={theme} toggleTheme={toggleTheme} />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme === 'dark' ? 'light' : 'dark'}
          />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
