import React, { useEffect, useRef } from 'react';
import './App.css';
import "./comps/styles/Scroll.css"

import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import Button from './comps/Button';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';

const App = () => {
  

  return (
    // Mark this div as the scroll container and attach the ref
    <div id='intro' className="!p-5 !m-5">
      <NavBar />
      <Intro />
      <About/>
      <TechStack/>
      <Projects/>
      {/* You can add Button or other components as needed */}
    </div>
  );
};

export default App;
