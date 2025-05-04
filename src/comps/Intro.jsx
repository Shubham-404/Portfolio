import React, { useState, useRef, useEffect } from 'react'
import './styles/Intro.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from './elems/Button'

const Home = ({ toggleTheme, dark }) => {

  const [Namaste, setNamaste] = useState("")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#main-head h1",
      { scale: .8, opacity: 0, y: '200px' },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        // duration: 1,
        ease: "back.out(1)",
        stagger: .2
      }
    );

  }, []);


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
      <div id='main-head' className='!p-10 !pt-0  max-md:!p-13'>
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
              onClick={() => { setNamaste(Namaste === "  " ? "🙏" : "  ") }}
              className='w-min flex name text-7xl font-extrabold text-transparent max-lg:text-5xl max-md:text-4xl bg-clip-text'
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
          <Button Href="https://linkedin.com/in/shubham-singh404" btn="LinkedIn" />
          <div onClick={switchTheme} className="setting !pb-2 flex justify-center items-center hover:scale-110 active:scale-80">
            {dark ? (
              <img ref={sun} className='h-6 brightness-85' src="/Portfolio/svgs/sun.svg" alt="light" />
            ) : (
              <img ref={moon} className='h-6 brightness-85' src="/Portfolio/svgs/moon.svg" alt="dark" />
            )}
          </div>

        </h1>
      </div>
    </div>
  )
}

export default Home;
