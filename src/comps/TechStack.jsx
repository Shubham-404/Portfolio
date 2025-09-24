import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from './elems/Img.jsx'
import Heading from './elems/Heading'
import { useGSAP } from '@gsap/react';
 

const TechStack = () => {

    useEffect(() => {
        gsap.registerPlugin("ScrollTrigger")
        gsap.registerPlugin(useGSAP)

        const container = document.querySelector('#tc');
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
                        start: "top 80%",
                        end: "top 60%",
                        scrub: 1,
                        markers: false,
                    }
                })
        })

    }, [])

    return (
        <div id='tech-stack' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
            <div id='tc' className='!p-10  max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="Tech Stack" />

                <p className='!p-2 text-lg/10 max-w-full gap-1 max-lg:text-base/8 max-md:text-sm/5 h-full'>Here are some of the major tools, that I have worked with or currently working on.</p>
                <div className=''>

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

export default TechStack