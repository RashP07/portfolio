
import React, {useState} from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
  <div>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
   <Skills/>
  <Project/>
  </div>
  )
}

export default App
