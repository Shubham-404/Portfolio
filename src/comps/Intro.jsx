import { useState, useRef, useCallback, memo, useEffect } from 'react';
import './styles/Intro.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './elems/Button';

const Home = ({ toggleTheme, dark, scrollToRef, play, switchMusic }) => {
  const mainHeadRef = useRef(null);
  const scrollFloatRef = useRef(null);
  const sun = useRef(null);
  const moon = useRef(null);
  const waveRef = useRef(null);
  const celebrateRef = useRef(null);
  const [showGuide, setShowGuide] = useState(true); // Guide state
  const containerRef = useRef(null);

  const dismissGuide = useCallback(() => {
    setShowGuide(false);
  }, []);

  const handleScrollAbout = useCallback(() => {
    if (scrollToRef?.current) {
      gsap.to(window, {
        duration: 0.8, // Slightly longer for smoothness
        scrollTo: scrollToRef.current,
        ease: 'power3.out', // Smoother ease
      });
    }
  }, [scrollToRef]);

  // Consolidate GSAP animations
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "back.out(1)" } });

    // Header animations
    if (mainHeadRef.current) {
      const h1Elements = mainHeadRef.current.querySelectorAll('h1');
      if (h1Elements.length) {
        tl.fromTo(
          h1Elements,
          { scale: 0.8, opacity: 0, y: 100 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1
          }
        );
      }
    }

    // Scroll indicator animation
    if (scrollFloatRef.current) {
      gsap.fromTo(
        scrollFloatRef.current,
        { opacity: 0, y: 20 },
        {
          delay: 2.5, // Start after text animations
          opacity: 0.8,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );
    }
  }, { scope: containerRef });

  // To switch between dark and light mode.
  const switchTheme = useCallback(() => {
    const icon = dark ? sun.current : moon.current;

    if (icon) {
      gsap.to(icon, {
        rotation: "+=360", // Relative rotation to allow multiple clicks
        duration: 0.6,
        ease: "power2.out"
      });
    }
    toggleTheme();
  }, [dark, toggleTheme]);

  const [greeting, setGreeting] = useState("Namaste (Hindi🙏🏼)");
  const greetingRef = useRef(null);

  useEffect(() => {
    const greetings = [
      "Namaste (Hindi🙏🏼)",
      "Vanakkam (Tamil👋🏼)",
      "Namaskaram (Telugu🖐🏼)",
      "Kem Chho (Gujarati👋🏼)",
      "Namaskāra (Marathi🖐🏼)",
      "Konnichiwa (Japanese👋🏼)",
      "Annyeonghaseyo (Korean🖐🏼)",
      "Merhaba (Turkish👋🏼)",
      "Shalom (Hebrew🖐🏼)",
      "Ciao (Italian👋🏼)",
      "Hola (Spanish🖐🏼)",
      "Bonjour (French👋🏼)",
      "Guten Tag (German🖐🏼)",
      "Privet (Russian👋🏼)",
      "Asalaam alaikum (Arabic🖐🏼)",
      "Sabaidi (Lao👋🏼)",
      "Kia ora (Maori🖐🏼)",
      "Aloha (Hawaiian👋🏼)"
    ]

    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % greetings.length;
      setGreeting(greetings[i]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [Namaste, setNamaste] = useState("");
  // To handle Namaste
  const handleNamaste = useCallback(() => {
    setNamaste(prev => prev === "" ? "🙏" : "");
  }, []);

  return (
    <div ref={containerRef} className="Intro relative !mt-5 !pt-10 grid justify-center items-center min-h-[75vh] justify-self-center">
      <div ref={mainHeadRef} id='main-head' className='!p-10 relative !pt-0 max-md:!p-13'>
        <main className='about justify-self-center font-fahk !p-0 !pt-0 max-w-3xl text-lg/20'>

          <span>
            <h1
              className='font-ubmono font-normal text-2xl !opacity-75 tracking-wide flex w-max text-wrap max-lg:text-3xl max-md:text-xl cursor-pointer select-none !pl-1'
            >
              {greeting}; I am
            </h1>
          </span>
          <span className='flex flex-col gap-1 font-bold max-lg:text-3xl max-md:text-4xl'>
            <h1
              className='w-min flex name text-7xl text-transparent max-lg:text-5xl max-md:text-4xl bg-clip-text cursor-pointer select-none'
            >
              Shubham.
            </h1>
            <h1 className='max-w-[90%] text-7xl/18 max-lg:text-5xl/16 max-md:text-4xl/10'>
              Crafting Code with Purpose!
            </h1>
          </span>
          <h1 className='max-w-[80%] text-xl/10 !pt-7 !pl-1 max-lg:text-lg max-md:text-sm'>
            Creative Web-Developer building projects and diving into Machine Learning.
          </h1>
        </main>
        <h1 className='!mt-10 flex items-center justify-center gap-5 max-md:gap-2 w-max !pt-2'>
          <div className='flex flex-col h-17 justify-start items-center gap-0'>
            <div className='flex'>
              <Button Href="https://github.com/Shubham-404/" btn="GitHub" play={play} />
            </div>
            <img
              ref={waveRef}
              className={`w-32 rotate-180 transition-all duration-300 ${play ? 'h-7' : 'h-0'}`}
              src="/images/music.gif"
              alt=""
            />
          </div>

          {/* Theme & Music with Guide */}
          <div className='relative flex justify-center items-center gap-3 mb-6'>

            {/* Guide Popup */}
            {showGuide && (
              <div
                onClick={dismissGuide}
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-max bg-white/90 dark:bg-black/80 text-indigo-900 dark:text-gray-100 text-xs font-bold py-1 px-3 rounded-lg shadow-lg backdrop-blur-sm border border-indigo-200/50 cursor-pointer animate-bounce z-50 flex items-center gap-2 group"
              >
                <span>Switch theme or play music</span>
                <span className="h-3 w-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full hover:bg-red-400 dark:hover:bg-red-500 transition-colors">
                  <img className="h-full w-full self-center place-items-center invert dark:invert-0" src="/svgs/cross.svg" alt="cross" />
                </span>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/90 dark:border-t-black/80"></div>
              </div>
            )}

            <div onClick={(e) => { switchTheme(); dismissGuide(); }} className="setting options h-8 w-10 inset-shadow-sm inset-shadow-indigo-800 bg-indigo-700/60 rounded-full p-2 flex justify-center items-center hover:scale-105 active:scale-90 transition-all duration-200 cursor-pointer">
              {dark ? (
                <img ref={sun} className='h-full w-full shadow-xl' src="/svgs/sun.svg" alt="Switch to light mode" />
              ) : (
                <img ref={moon} className='h-full w-full shadow-xl' src="/svgs/moon.svg" alt="Switch to dark mode" />
              )}
            </div>

            {/* Music */}
            <button
              onClick={(e) => { switchMusic(); dismissGuide(); }}
              type="button"
              aria-label={play ? "Pause music" : "Play music"}
              className="music options h-8 w-10 inset-shadow-sm inset-shadow-indigo-800 bg-indigo-700/60 rounded-full p-2 flex justify-center items-center hover:scale-105 active:scale-90 transition-all duration-200 cursor-pointer"
            >
              {play ? (
                <img className='h-[110%] invert' src="/images/playing.gif" alt="Playing music" />
              ) : (
                <img className='h-[110%] invert p-[2px]' src="/images/enable-sound.png" alt="Enable sound" />
              )}
            </button>
          </div>
        </h1>
        <button
          ref={scrollFloatRef}
          onClick={handleScrollAbout}
          type="button"
          aria-label="Scroll to about section"
          className="scroll-float !mt-10 opacity-0 text-[rgb(100,100,128)] font-medium text-sm bottom-0 min-lg:-bottom-5 max-md:-bottom-10 cursor-pointer grid place-items-center justify-center self-center justify-self-center animate-bounce"
        >
          <span>Scroll Down</span>
          <svg height="24" viewBox="0 0 24 24" width="24" aria-hidden="true"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="rgb(100,100,128)"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default memo(Home);
