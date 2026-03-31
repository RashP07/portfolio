
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

function App() {

  return (
    
  <div>
     <ScrollButton />
      <Navbar/>
      <Home />
      <About/>
    <Experience/>
    <Education/>
   <Skills/>
  <Project/>
  <Footer/>
  
  </div>
  )
}

export default App
