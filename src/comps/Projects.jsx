import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, memo, useState } from 'react';
import Heading from './elems/Heading'
import Card from './elems/Card.jsx';
import ScrollStack, { ScrollStackItem } from './ext-components/ScrollStack.jsx';

const Projects = () => {
  const containerRef = useRef(null);

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/files/project-works.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => {
        // Silently handle error - component will show loading state
      });
  }, []);

  // for scrolltrigger
  useEffect(() => {
    if (!containerRef.current) return;
    const children = gsap.utils.toArray(containerRef.current.children);

    const scrollTriggers = children.map((child) => {
      return gsap.fromTo(child,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1)",
          scrollTrigger: {
            trigger: child,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
            markers: false,
          }
        }
      );
    });
    return () => {
      scrollTriggers.forEach(st => st?.scrollTrigger?.kill());
    };
  }, []); // Run once on mount

  const [itemStackDistance, setItemStackDistance] = useState(31);
  useEffect(() => {
    setTimeout(() => {
      setItemStackDistance(30);
    }, 3000);
  }, [])

  return (
    <>
      <div ref={containerRef} id='projects' className='projects-container mt-20 mb-50'>
        <ScrollStack
          useWindowScroll={true}
          itemStackDistance={itemStackDistance}
        >
          <ScrollStackItem itemClassName="flex justify-center">
            <Heading className="" Head="Projects" />
          </ScrollStackItem>
          {data.map((project, index) => (
            <ScrollStackItem key={index}>
              <Card item={project} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div >
    </>
  )
}

export default memo(Projects); 