import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import NavBarMobile from './comps/NavBarMobile';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import Cursor from './Cursor';
import Loading from './comps/Loading'; // Import the Loading component

const App = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Toggle mobile navbar visibility
  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const navRef = useRef(null);

  useEffect(() => {
    // Simulate the loading time (this could be replaced with actual loading logic
    const handleLoading = () => {
      setIsLoaded(true);
      window.isLoaded = true;
    }

    // if (document.readyState === 'complete') handleLoading()
    // else window.addEventListener('load', handleLoading);

    // return () => {
    //   window.removeEventListener('load', handleLoading);
    // };

    //=================== timeout loading ===============

    setTimeout(() => {
      handleLoading();
    }, 1500);

  }, []);

  return (
    <>
      {!isLoaded && <Loading />} {/* Show loading animation until the site is loaded */}
      {isLoaded && (
        <>
          {/* <Cursor /> */}
          <NavBarMobile isVisible={isMobileNavVisible} toggleMobileNav={toggleMobileNav} />
          <div id='intro' className="p-5 m-5 relative">
            <NavBar ID="nv" ref={navRef} toggleMobileNav={toggleMobileNav} />
            <Intro />
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
