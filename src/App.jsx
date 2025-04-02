import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBarMobile from './comps/NavBarMobile';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import Cursor from './Cursor';

const App = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  // Toggle mobile navbar visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const navRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin("ScrollTrigger")  // register ScrollTrigger 
    const navEl = navRef.current;
    gsap.fromTo(
      navEl,
      { scale: 0.7, opacity: 0.3 },  // Initial state
      {
        scale: 1,                // Final state
        opacity: 1,              // Final state
        duration: 1.5,           // Animation duration
        ease: "back.out(1)"       // Smooth easing
      }
    );
  }, [])

  return (
    <>
      <Cursor />
      <NavBarMobile isVisible={isMobileNavVisible} toggleMobileNav={toggleMobileNav} />
      <div id='intro' className="p-5 m-5 relative">
        <NavBar ref={navRef} toggleMobileNav={toggleMobileNav} />
        <Intro />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
