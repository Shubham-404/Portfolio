import { useState, useRef, useEffect, useCallback } from 'react';
import NavBar from './comps/NavBar';
import Intro from './comps/Intro';
import About from './comps/About';
import TechStack from './comps/TechStack';
import Projects from './comps/Projects';
import Contact from './comps/Contact';
import Footer from './comps/Footer';
import Loading from './comps/Loading';
import ToTop from './comps/ToTop';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import useIsMobile from './hooks/useIsMobile';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Global GSAP Configuration
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const themeRef = useRef(null);
  const [dark, setDark] = useState(true);
  const aboutRef = useRef(null);
  const isMobile = useIsMobile();

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setDark(prev => !prev);
  }, []);

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
        // Critical resources (Fonts, Hero Image, etc.)
        const criticalImages = [
          '/images/avatar.png',
          '/images/music.gif',
          '/images/playing.gif',
          // Minimal SVGs for initial render
          '/svgs/sun.svg',
          '/svgs/moon.svg',
        ];

        // Non-critical / Below fold
        const deferredImages = [
          '/images/github-gif.gif',
          '/images/firebase.png',
          '/images/django.png',
          '/images/image-hover.png',
          '/images/khatabook.png',
          '/images/mongo.png',
          '/images/node.png',
          '/images/python.png',
          '/images/tailwind.png',
          '/images/tech1.png',
          '/images/tech2.png',
          '/images/tech3.png',
          '/images/tech4.png',
          '/images/tech5.png',
          '/images/enable-sound.png',
          '/svgs/github.svg',
          '/svgs/linkedin.svg',
          '/svgs/instagram.svg',
          '/svgs/menu.svg',
          '/svgs/cross.svg',
        ];

        // Helper to load image
        const loadImage = (url) => new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.onerror = () => resolve(null); // Resolve null on error to not block
          img.src = url;
        });

        // 1. Wait for fonts
        await document.fonts.ready;

        // 2. Load critical images
        await Promise.all(criticalImages.map(loadImage));

        // 3. Mark as ready enough to show UI
        setResourcesLoaded(true);

        // 4. Load remaining in background
        Promise.all(deferredImages.map(loadImage));

        // Load JSON data
        fetch("/files/project-works.json")
          .catch(err => console.warn("Failed to load project works", err));

      } catch (error) {
        console.error("Resource loading error:", error);
        // Fallback
        setResourcesLoaded(true);
      }
    };

    loadResources();
  }, []);

  // Handle loading state transition
  useEffect(() => {
    if (resourcesLoaded) {
      // Debounce the loading screen exit
      const timer = setTimeout(() => {
        setIsLoaded(true);
        // Refresh ScrollTrigger after a slight delay to ensure layout is settled
        setTimeout(() => ScrollTrigger.refresh(), 500);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [resourcesLoaded]);

  return (
    <>
      <Loading isLoading={!isLoaded} />
      {isLoaded && (
        <div ref={themeRef} id='intro' className="dark relative font-ub">
          <NavBar />
          <Intro toggleTheme={toggleTheme} dark={dark} scrollToRef={aboutRef} />
          <div className=''>

            <About ref={aboutRef} />
            <Projects />
            <TechStack />
            <Contact />
            <Footer />
            <ToTop />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
