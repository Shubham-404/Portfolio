import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from './elems/Img.jsx'
import Heading from './elems/Heading'


const TechStack = () => {

    useEffect(() => {
        gsap.registerPlugin("ScrollTrigger")

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
                        end: "bottom top",
                        scrub: 1,
                        markers: false,
                    }
                })
        })

    }, [])

    return (
        <div id='tech-stack' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
            <div id='tc' className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="Tech Stack" />

                <p className='!p-5 text-lg/10 max-w-full max-lg:text-base/8 max-md:text-sm/5 h-full'>Here are some of the major tools, that I have worked with or currently working on.</p>
                <div className="flex gap-5 flex-wrap !pt-5 w-full h-full max-md:scale-80 justify-start items-center">
                    {/* <section className='border w-2/3 max-md:w-full h-full flex justify-center items-center'> */}
                    {/* </section> */}
                    <Img imgAdd="tech1.png" techName="React JS" />
                    <Img imgAdd="tech2.png" techName="JavaScript" />
                    <Img imgAdd="tech3.png" techName="Git" />
                    <Img imgAdd="tech4.png" techName="HTML" />
                    <Img imgAdd="tech5.png" techName="CSS" />
                    <Img imgAdd="python.png" techName="Python" />
                    <Img imgAdd="django.png" techName="Django" />

                </div>
            </div>
        </div>
    )
}

export default TechStack