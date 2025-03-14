import React, { useState, useEffect } from 'react';
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

  return (
    <>
      <Cursor />
      <NavBarMobile isVisible={isMobileNavVisible} toggleMobileNav={toggleMobileNav} />
      <div id='intro' className="p-5 m-5 relative">
        <NavBar toggleMobileNav={toggleMobileNav} />
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
