import React, { useEffect, useRef } from 'react';
import './App.css';
// import "./comps/styles/Scroll.css"

import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import NavBarMobile from './comps/NavBarMobile';

const App = () => {
  

  return (
    // Mark this div as the scroll container and attach the ref
    <>
    <nav className='hidden'>
      <NavBarMobile/>
    </nav>
    <div id='intro' className="!p-5 !m-5">
      <NavBar />
      <Intro />
      <About/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </div>
      <Footer/>
    </>
  );
};

export default App;
