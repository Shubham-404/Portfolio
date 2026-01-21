import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from './elems/Img.jsx'
import Heading from './elems/Heading'

const TechStack = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const children = gsap.utils.toArray(containerRef.current.children);
        if (children.length === 0) return;

        gsap.fromTo(children,
            { scale: 0.9, opacity: 0, y: 30 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.2)",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom center",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div id='tech-stack' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-10 flex justify-center items-start'>
            <div ref={containerRef} id='tc' className='!p-10  max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="Tech Stack" />
                <div className='!pt-10'>
                    <div className="max-w-[80vw] justify-self-center flex flex-wrap min-lg:gap-5 min-md:!px-15 justify-center items-center ">
                        <Img imgAdd="node.png" techName="Node.js" />
                        <Img imgAdd="tech1.png" techName="React" />
                        <Img imgAdd="tech2.png" techName="Experss" />
                        <Img imgAdd="mongo.png" techName="MongoDB" />
                        <Img imgAdd="gsap.png" techName="GSAP" />
                        <Img imgAdd="firebase.png" techName="Firebase" />
                        <Img imgAdd="tech3.png" techName="Git" />
                        <Img imgAdd="tailwind.png" techName="TailwindCSS" />
                        <Img imgAdd="python.png" techName="Flask" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(TechStack);