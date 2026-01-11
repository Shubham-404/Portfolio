import { useState, useRef, useCallback, memo } from 'react'
import './styles/Intro.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './elems/Button'

const Home = ({ toggleTheme, dark, scrollToRef }) => {
  const handleScrollAbout = useCallback(() => {
    if (scrollToRef?.current) {
      gsap.to(window, {
        duration: 0.1,
        scrollTo: scrollToRef.current,
        ease: 'ease',
      });
    }
  }, [scrollToRef]);

  const [Namaste, setNamaste] = useState("");
  const mainHeadRef = useRef(null);
  const scrollFloatRef = useRef(null);

  useGSAP(() => {
    if (mainHeadRef.current) {
      const h1Elements = mainHeadRef.current.querySelectorAll('h1');
      gsap.fromTo(
        h1Elements,
        { scale: 0.8, opacity: 0, y: '200px' },
        {
          delay: 0.5,
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "back.out(1)",
          stagger: 0.2
        }
      );
    }
  });

  useGSAP(() => {
    if (scrollFloatRef.current) {
      gsap.fromTo(
        scrollFloatRef.current,
        { opacity: 0 },
        {
          delay: 2,
          opacity: 1,
        }
      );
    }
  });

  const sun = useRef(null);
  const moon = useRef(null);
  const waveRef = useRef(null);
  const celebrateRef = useRef(null);
  const [play, setPlay] = useState(false);
  const songRef = useRef(null);

  // Initialize audio only once
  if (!songRef.current) {
    songRef.current = new Audio("/files/falling-again.mp3");
    songRef.current.loop = true;
  }

  // To control Music
  const switchMusic = useCallback(() => {
    const musicElem = songRef.current;
    if (!musicElem) return;

    if (play) {
      musicElem.pause();
      setPlay(false);
    } else {
      musicElem.play().catch(() => {
        // Handle autoplay restrictions silently
      });
      setPlay(true);
    }
  }, [play]);


  // To switch between dark and light mode.
  const switchTheme = useCallback(() => {
    const icon = dark ? sun.current : moon.current;

    if (icon) {
      gsap.to(icon, {
        rotation: 360,
        duration: 0.6,
        ease: "power2.out"
      });
    }
    toggleTheme();
  }, [dark, toggleTheme]);

  // To handle Namaste
  const handleNamaste = useCallback(() => {
    setNamaste(prev => prev === "" ? "🙏" : "");
  }, []);

  return (
    <div className="Intro relative !mt-5 !pt-10  grid justify-center items-center min-h-[75vh] justify-self-center">
      <div
        ref={celebrateRef}
        className={`waves absolute top-0 rounded-full h-[2px] justify-self-center flex overflow-hidden transition-all duration-300 ${play ? 'w-[55vw]' : 'w-0'}`}
      >
      </div>
      <div ref={mainHeadRef} id='main-head' className='!p-10 relative !pt-0  max-md:!p-13'>
        <main className='about justify-self-center font-hawk !p-0 !pt-0 max-w-3xl text-lg/20'>
          <span>

            <h1
              onClick={handleNamaste}
              className='font-ubmono font-normal text-3xl tracking-wide flex w-max max-lg:text-3xl max-md:text-xl'
            >
              Namaste({Namaste}); I am
            </h1>
          </span>
          <span className='flex flex-col gap-1 font-bold max-lg:text-3xl max-md:text-4xl'>

            <h1
              onClick={handleNamaste}
              className='w-min flex name text-7xl text-transparent max-lg:text-5xl max-md:text-4xl bg-clip-text'
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

          {/* Theme */}
          <div className='flex justify-center items-center gap-3 mb-6'>

            <div onClick={switchTheme} className="setting options h-8 w-10 inset-shadow-sm inset-shadow-indigo-800 bg-indigo-700/60 rounded-full p-2 flex justify-center items-center hover:scale-110 active:scale-80">
              {dark ? (
                <img ref={sun} className='h-5 shadow-xl' src="/svgs/sun.svg" alt="light" />
              ) : (
                <img ref={moon} className='h-5 shadow-xl' src="/svgs/moon.svg" alt="dark" />
              )}
            </div>

            {/* Music */}
            <button
              onClick={switchMusic}
              type="button"
              aria-label={play ? "Pause music" : "Play music"}
              className="music options h-8 w-10 inset-shadow-sm inset-shadow-indigo-800 bg-indigo-700/60 rounded-full p-2 flex justify-center items-center hover:scale-110 active:scale-80"
            >
              {play ? (
                <img className='h-5 invert' src="/images/playing.gif" alt="Playing music" />
              ) : (
                <img className='h-5 invert p-[2px]' src="/images/enable-sound.png" alt="Enable sound" />
              )}
            </button>
          </div>

        </h1>
        <button
          ref={scrollFloatRef}
          onClick={handleScrollAbout}
          type="button"
          aria-label="Scroll to about section"
          className="scroll-float absolute opacity-80 text-[rgb(100,100,128)] font-medium text-sm bottom-0 min-lg:-bottom-5 max-md:-bottom-10 cursor-pointer left-1/2 -translate-x-1/2 -translate-y-1/2  grid place-items-center justify-center self-center justify-self-center animate-bounce "
        >
          <span>Scroll Down</span>
          <svg className='' height="100%" viewBox="0 0 24 24" width="24" aria-hidden="true"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="rgb(100,100,128)"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default memo(Home);
