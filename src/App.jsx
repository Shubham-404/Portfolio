import { useState, useRef, useEffect } from 'react';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import Loading from './comps/Loading';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";


//without this line, ScrollToPlugin may get dropped by your bundler...

const App = () => {
  const plugins = [ScrollToPlugin];

  const [isLoaded, setIsLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const navRef = useRef(null);
  const themeRef = useRef(null);
  const [dark, setDark] = useState(true);
  const aboutRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
          '/images/my-ava.png',
          '/images/prayag.jpg',
          '/svgs/github.svg',
          '/svgs/linkedin.svg',
          '/svgs/instagram.svg',
          '/svgs/namaste.svg',
          '/svgs/sun.svg',
          '/svgs/moon.svg',
          '/svgs/menu.svg',
          '/svgs/cross.svg',
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
        const jsonPromise = fetch("/files/project-works.json")
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
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resourcesLoaded]);

  return (
    <>
      <Loading isLoading={!isLoaded} />
      {isLoaded && (
        <>
          <div ref={themeRef} id='intro' className="dark relative">
            <NavBar ID="nv" dark={dark} ref={navRef} />
            <Intro toggleTheme={toggleTheme} dark={dark} scrollToRef={aboutRef} />
            <About ref={aboutRef} />
            <Projects />
            <TechStack />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
