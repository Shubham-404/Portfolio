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
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const navRef = useRef(null);
  const themeRef = useRef(null);
  const [dark, setDark] = useState(true);

  // Toggle theme
  const toggleTheme = () => {
    setDark(prev => !prev);
  };

  // Update the class on #intro div when `dark` changes
  useEffect(() => {
    const theme = themeRef.current;
    if (theme) {
      theme.classList.remove('dark', 'light');
      theme.classList.add(dark ? 'dark' : 'light');
    }
  }, [dark]);

  // Handle resource loading
  useEffect(() => {
    const loadResources = async () => {
      try {
        // Load fonts
        await document.fonts.ready;
        
        // Load images
        const imageUrls = [
          '/Portfolio/images/Scene2.gif',
          '/Portfolio/images/my-ava.png',
          '/Portfolio/images/prayag.jpg',
          '/Portfolio/svgs/github.svg',
          '/Portfolio/svgs/linkedin.svg',
          '/Portfolio/svgs/instagram.svg',
          '/Portfolio/svgs/namaste.svg',
          '/Portfolio/svgs/sun.svg',
          '/Portfolio/svgs/moon.svg',
          '/Portfolio/svgs/hamburger.svg',
          '/Portfolio/svgs/cross.svg',
          '/Portfolio/svgs/download.svg',
          '/Portfolio/svgs/arrow-right.svg'
        ];

        const imagePromises = imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = url;
          });
        });

        // Load JSON data
        const jsonPromise = fetch("/Portfolio/files/project-works.json")
          .then(response => response.json());

        // Wait for all resources to load
        await Promise.all([...imagePromises, jsonPromise]);
        
        // Set resources as loaded
        setResourcesLoaded(true);
      } catch (error) {
        console.error('Error loading resources:', error);
        // Even if there's an error, we should show the site after a reasonable timeout
        setTimeout(() => setResourcesLoaded(true), 5000);
      }
    };

    loadResources();
  }, []);

  // Handle loading state
  useEffect(() => {
    if (resourcesLoaded) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [resourcesLoaded]);

  return (
    <>
      <Loading isLoading={!isLoaded} />
      {isLoaded && (
        <>
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
