import React, { useState, useRef, useEffect } from 'react'
import './styles/Intro.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from './elems/Button'

const Home = () => {

  const [Namaste, setNamaste] = useState("  ")
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Registering ScrollTrigger plugin
    
    const nameEl = nameRef.current;

    // Animating scale and opacity of the name
    gsap.fromTo(
      nameEl, 
      { scale: 0.7, opacity: 0.3, bottom: -10 },  // Initial state
      { 
        scale: 1,                   // Final state
        opacity: 1,                 // Final state
        duration: 1,              // Duration of the animation
        bottom: 0,
        ease: "back.out(1)"          // Smooth easing
      }
    );

  }, []);  // Empty dependency array to run only on mount

  return (
    <div className="Intro !pt-10 grid justify-center items-center">
      <div className='!p-10 '>
        <main className='justify-self-center !p-0 !pt-0 max-w-7xl text-lg/20'>
          <h1 
            onClick={() => { setNamaste(Namaste === "  " ? "🙏" : "  ") }} 
            className='transition- font-code font-semibold text-4xl !pb-5 max-lg:text-3xl max-md:text-2xl'
          >
            Namaste({Namaste}); I am
          </h1>
          <h1 
            onClick={() => { setNamaste(Namaste === "  " ? "🙏" : "  ") }} 
            ref={nameRef} 
            className='name text-7xl font-bold font-hawk text-transparent max-lg:text-6xl max-md:text-5xl bg-clip-text inline'
          >
            Shubham.
          </h1>
          <h1 className='text-7xl font-bold font-hawk max-lg:text-6xl max-md:text-5xl'>
            Creativity & Code!
          </h1>
          <h1 className='text-xl text-gray-300 !pt-10 max-lg:text-lg max-md:text-sm'>
            Creative Front-End Developer currently building projects and learning Back-End.
          </h1>
        </main>
        <div className='!mt-10'>
          <Button Href="https://linkedin.com/in/shubham-singh404" btn="LinkedIn" />
        </div>
      </div>
    </div>
  )
}

export default Home;
