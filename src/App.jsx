import React, { useState, useRef, useEffect } from 'react';
import NavBarMobile from './comps/NavBarMobile';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import Cursor from './Cursor';
import Loading from './comps/Loading';

const App = () => {
  console.log("Hello dear sneaky developer! Go ahead and scratch out all you want.");
  
  // const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navRef = useRef(null);
  const themeRef = useRef(null);

  const [dark, setDark] = useState(true);

  // Toggle theme
  const toggleTheme = () => {
    setDark(prev => !prev); // Flip state
  };

  // Update the class on #intro div when `dark` changes
  useEffect(() => {
    const theme = themeRef.current;
    if (theme) {
      theme.classList.remove('dark', 'light'); // remove both first
      theme.classList.add(dark ? 'dark' : 'light'); // add current
    }
  }, [dark]);

  // Handle loading state
  useEffect(() => {
    const handleLoading = () => {
      setIsLoaded(true);
    };
    setTimeout(() => {
      handleLoading();
    }, 1000);

    // if (document.readyState === 'complete') {
    //   handleLoading();
    // } else {
    //   window.addEventListener('load', handleLoading);
    // }

    // return () => {
    //   window.removeEventListener('load', handleLoading);
    // };
  }, []);

  return (
    <>
      {!isLoaded && <Loading />}
      {isLoaded && (
        <>
          {/* <Cursor /> */}
          {/* <NavBarMobile isVisible={isMobileNavVisible} toggleMobileNav={toggleMobileNav} /> */}
          <div ref={themeRef} id='intro' className="dark p-5 m-5 relative">
            <NavBar ID="nv" dark={dark} ref={navRef} />
            <Intro toggleTheme={toggleTheme} dark={dark} />
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
