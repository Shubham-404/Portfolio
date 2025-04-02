import React, { useState, useRef, useEffect } from 'react'
import './styles/Intro.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from './elems/Button'

const Home = () => {

  const [Namaste, setNamaste] = useState("  ")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#main-head h1",
      { scale: .8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        // duration: 1,
        ease: "back.out(1)",
        stagger: .1
      }
    );

  }, []);

  return (
    <div className="Intro !pt-10 grid justify-center items-center">
      <div id='main-head' className='!p-10 '>
        <main className='about justify-self-center !p-0 !pt-0 max-w-7xl text-lg/20'>
          <h1
            onClick={() => { setNamaste(Namaste === "  " ? "🙏" : "  ") }}
            className='font-code font-semibold text-4xl !pb-5 max-lg:text-3xl max-md:text-2xl'
          >
            Namaste({Namaste}); I am
          </h1>
          <h1>

            <span
              onClick={() => { setNamaste(Namaste === "  " ? "🙏" : "  ") }}
              className='name scale-10 text-7xl font-bold font-hawk text-transparent max-lg:text-6xl max-md:text-5xl bg-clip-text inline'
            >
              Shubham.
            </span>
          </h1>
          <h1 className='text-7xl font-bold font-hawk max-lg:text-6xl max-md:text-5xl'>
            Creativity & Code!
          </h1>
          <h1 className='text-xl text-gray-300 !pt-10 max-lg:text-lg max-md:text-sm'>
            Creative Front-End Developer currently building projects and learning Back-End.
          </h1>
        </main>
        <h1 className='!mt-10'>
          <Button Href="https://linkedin.com/in/shubham-singh404" btn="LinkedIn" />
        </h1>
      </div>
    </div>
  )
}

export default Home;
