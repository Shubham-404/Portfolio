import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect, useRef } from 'react';
import ImgLink from './elems/Works.jsx'
import Heading from './elems/Heading'
import CardList from './elems/CardList.jsx';


// import script from 'learn';
const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin("ScrollTrigger")

    const container = document.querySelector('#pj');
    const children = gsap.utils.toArray(container.children);
    children.forEach((child) => {
      gsap.fromTo(child, { scale: .8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: .5,
          ease: "back.out(1)",
          scrollTrigger: {
            trigger: child,
            start: "left 80%",
            end: "bottom top",
            scrub: 1,
            markers: false,
          }
        })
    })

  }, [])



  return (
    <div id='projects' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
      <div id='pj' className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

        <Heading Head="Projects" />

        <p className='!p-5 text-lg/10 max-w-full max-lg:text-base/8 max-md:text-sm/5 h-full'>Some of my original and latest projects, that I have worked on are listed here.</p>
        <div className="flex gap-5 flex-wrap w-full h-full max-md:flex-col max-md:items-center justify-center  items-center">
          <CardList />


        </div>
      </div>
    </div>
  )
}

export default Projects 