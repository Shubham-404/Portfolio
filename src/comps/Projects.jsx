import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, memo, useState } from 'react';
import { useGSAP } from '@gsap/react';
import Heading from './elems/Heading'
import Card from './elems/Card.jsx';

const Projects = () => {
  const containerRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/files/project-works.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => {
        // Silently handle error
      });
  }, []);

  // Animation with useGSAP
  useGSAP(() => {
    if (data.length === 0 || !containerRef.current) return;

    // Target the card containers specifically
    const cards = gsap.utils.toArray(".project-card-container");

    gsap.fromTo(cards,
      { scale: 0.9, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1, // Stagger effect
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef, dependencies: [data] });

  return (
    <div id='projects' className='projects-container !pt-30 mb-20 flex flex-col items-center justify-center min-h-[50vh] w-full'>
      <div className="mb-12 block">
        <Heading Head="Projects" />
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-5 place-items-center">
        {data.map((project, index) => (
          <div key={index} className="project-card-container flex justify-center w-full max-w-[400px]">
            <Card item={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Projects); 