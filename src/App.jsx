import React, { useState, useEffect, useRef } from 'react';
import Loader from './comps/Loader'
import './App.css';
import "./comps/styles/Scroll.css"

import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import Button from './comps/elems/Button';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import NavBarMobile from './comps/NavBarMobile';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting isLoading to false after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed (here, we simulate 2 seconds loading time)

    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader /> // Show the spinner while loading
      ) : (
        // Mark this div as the scroll container and attach the ref

        <>
          <nav className='hidden'>
            <NavBarMobile />
          </nav>
          <div id='intro' className="!p-5 !m-5">
            <NavBar />
            <Intro />
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
