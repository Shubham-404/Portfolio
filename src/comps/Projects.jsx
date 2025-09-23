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
    // children.forEach((child) => {
    gsap.fromTo("#pj", { scale: .8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: .5,
        ease: "back.out(1)",
        stagger: 2,
        scrollTrigger: {
          trigger: "#pj",
          start: "left 80%",
          end: "bottom top",
          scrub: 1,
          markers: false,
        }
      })
    // })

  }, [])



  return (
    <div id='projects' className='min-h-[90svh]  max-w-screen overflow-hidden !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
      <div id='pj' className='!p-5 max-md:!p-3 overflow-hidden !pb-0 max-w-270'>

        <Heading Head="Projects" />

        <p className='!p-5 text-lg/10 max-lg:text-base/8 max-md:text-sm/5 h-full'>Here are some of my latest projects along with a concise description, link to their GitHub repositories and Live Preview(if available). Make sure to take a look and feel free to contact for any suggestions or questions.</p>
        <div className="flex relative flex-col min-h-[80vh] h-full items-center">
          <h1 className="scroll-guide text-4xl absolute top-50 text-center opacity-30">Scroll up<br/>SLOW<br/>to view.</h1>
          <CardList />


        </div>
      </div>
    </div>
  )
}

export default Projects 