import { useState, useRef, useEffect } from 'react'
import './styles/Intro.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from './elems/Button'
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Home = ({ toggleTheme, dark, scrollToRef }) => {
  gsap.registerPlugin(ScrollToPlugin)
  gsap.registerPlugin(useGSAP)

  const handleScrollAbout = () => {
    if (scrollToRef.current) {
      useGSAP(() => {

        gsap.to(window, {
          duration: .1,
          scrollTo: scrollToRef.current,
          ease: 'ease',
        })
      });
    } else {
      console.error("Ref is Null!")
    }
  }

  const [Namaste, setNamaste] = useState("")
  useGSAP(() => {
    gsap.fromTo(
      "#main-head h1",
      { scale: .8, opacity: 0, y: '200px' },
      {
        delay: .5,
        scale: 1,
        opacity: 1,
        y: 0,
        // duration: 1,
        ease: "back.out(1)",
        stagger: .2
      }
    );
  })
  useGSAP(() => {
    gsap.fromTo(
      ".scroll-float",
      { opacity: 0 },
      {
        delay: 2,
        opacity: 1,
      }
    )
  })

  const sun = useRef(null);
  const moon = useRef(null);

  const switchTheme = () => {
    const icon = dark ? sun.current : moon.current;
    if (icon) {
      gsap.fromTo(icon,
        { rotation: 0 },
        {
          rotation: 360,
          duration: .6,
          ease: "power2.out"
        }
      )
    }
    toggleTheme(); // Call the prop from App

  }

  return (
    <div className="Intro !mt-5 !pt-10 grid justify-center items-center min-h-[75vh]">
      <div id='main-head' className='!p-10 relative !pt-0  max-md:!p-13'>
        <main className='about justify-self-center font-hawk !p-0 !pt-0 max-w-3xl text-lg/20'>
          <span>

            <h1
              onClick={() => { setNamaste(Namaste === "" ? "🙏" : "") }}
              className='font-ubmono font-normal text-3xl tracking-wide flex w-max max-lg:text-3xl max-md:text-xl'
            >
              Namaste({Namaste}); I am
            </h1>
          </span>
          <span className='flex flex-col gap-1 font-bold max-lg:text-3xl max-md:text-4xl'>

            <h1
              onClick={() => { setNamaste(Namaste === "" ? "🙏" : "") }}
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
        <h1 className='!mt-10 flex items-center justify-center gap-5 w-max !pl-2 !pt-2'>
          <Button Href="https://github.com/Shubham-404/" btn="GitHub" />
          <div onClick={switchTheme} className="setting !pb-2 flex justify-center items-center hover:scale-110 active:scale-80">
            {dark ? (
              <img ref={sun} className='h-6 brightness-85' src="/svgs/sun.svg" alt="light" />
            ) : (
              <img ref={moon} className='h-6 brightness-85' src="/svgs/moon.svg" alt="dark" />
            )}
          </div>

        </h1>
        <button onClick={handleScrollAbout} className="scroll-float absolute opacity-80 text-[rgb(100,100,128)] font-medium text-sm -bottom-30 min-lg:-bottom-5 cursor-pointer left-1/2 -translate-x-1/2 -translate-y-1/2  grid place-items-center justify-center self-center justify-self-center animate-bounce ">
          <span>Scroll Down</span>
          <svg className='' height="100%" viewBox="0 0 24 24" width="24"><path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" fill="rgb(100,100,128)"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Home;
