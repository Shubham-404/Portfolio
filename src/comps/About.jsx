import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './styles/About.css'
import Button from './elems/Button'
import Heading from './elems/Heading'

const About = () => {
    const resumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/Portfolio/files/Shubham-Resume-2025.pdf';  // Path to the file in the public folder
        link.target = '__blank';  // 
        link.click();
    }

    useEffect(() => {
        gsap.registerPlugin("ScrollTrigger")

        const container = document.querySelector('#ab');
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
        <div id='about' className='min-h-100 w-full !p-10 max-md:!p-3 !pb-0 flex justify-center items-center'>
            <div id='ab' className='!mt-10 !p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="About Me" />

                <div className="content !pt-5 w-full flex max-md:flex-col max-md:items-center justify-start items-center">
                    <section className='w-2/3 max-md:w-full flex flex-col justify-center items-start max-md:!p-5 max-md:!pt-0 max-md:!mb-5'>
                        <p className='!p-5 text-lg/10 max-w-120 max-lg:text-sm/10 max-md:text-sm/7 h-full'>Hey, I'm Shubham, a web developer and AI/ML enthusiast. I love building cool stuff with code, solving real-world problems, and constantly learning new things. Currently diving deep into backend development and machine learning. Always up for a challenge and excited to create impactful solutions. <b>Let’s connect! 🚀</b></p>
                        <a onClick={resumeDownload} className='!ml-5 cursor-pointer flex items-center justify-center rounded-full overflow-hidden w-35 gap-3 jush2-center hover:scale-105 hover:brightness-110 active:scale-95 !p-3 bg-linear-to-r from-indigo-600 to-purple-800'>
                            <img className='h-7 invert' src="/Portfolio/svgs/download.svg" alt="download" />
                            <h2 className='text-md max-md:text-sm font-bold text-white '>Resume</h2>
                        </a>

                    </section>
                    <section className='w-70 max-lg:w-50 max-md:w-[70%] !mb-5'>
                        <div className='img-cont relative'>
                            <img className='rounded-xl w-full' src="/Portfolio/images/prayag.jpg" alt="MyPic" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About