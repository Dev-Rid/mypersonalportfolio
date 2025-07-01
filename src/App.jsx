import './App.css';
import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Skills from './component/Skills';
import Projects from './component/Projects';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App bg-white">
      <Header/>
      <Hero/>
      <Skills/> 
      <Projects/>
      <Contact/> 
      <About/>
    </div>
  );
}

export default App;
