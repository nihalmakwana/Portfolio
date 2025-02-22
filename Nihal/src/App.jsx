import React from 'react'

import Navbar from './Navbar/Navbar'
import Home from "./Home/Home"
import About from "./About/About"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
