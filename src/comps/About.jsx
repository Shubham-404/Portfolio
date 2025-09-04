import { useEffect, forwardRef } from 'react';
import gsap from 'gsap';
import './styles/About.css'
import Heading from './elems/Heading'

const About = forwardRef((props, ref) => {
    const resumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/Shubham-Resume-2025.pdf';  // Path to the file in the public folder
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
        <div ref={ref} id='about' className='min-h-100 w-full !p-10 max-md:!p-3 !pb-0 flex justify-center items-center'>
            <div id='ab' className='!mt-10 !p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="About Me" />

                <div className="content !pt-5 w-full flex max-md:flex-col max-md:items-center justify-start items-center">
                    <section className='w-2/3 max-md:w-full flex flex-col justify-center items-start max-md:!p-5 max-md:!pt-0 max-md:!mb-5 '>
                        <p className='!p-5 !pb-0 text-lg/10 max-w-120 max-lg:text-sm/10 max-md:text-sm/7 h-full'>Hey, I'm Shubham. Developing reliable and secure servers along with user-friendly UI is my goal. Solving real-world problems, and constantly learning new techs. Currently working on building backend servers exploring machine learning. Always up for a challenge and excited to create impactful solutions.</p>
                        <div className='flex flex-wrap items-center justify-between gap-5 !ml-4 !mt-3 w-[65%] max-w-lg'>

                            <a className='' target='blank' href="https://linkedin.com/in/shubham-404-/">
                                <strong className='flex items-center justify-between gap-2 !px-3 !py-2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg hover:scale-105 border-2 border-blue-500/30 hover:border-blue-500/50 hover:from-blue-600/60 text-nowrap'>Let’s connect! <img className='h-6 rounded-md' src="/svgs/linkedin-color.svg" alt="LinkedIn" /></strong></a>
                            <a target='_blank' href='/files/Shubham-Resume-2025.pdf' className='cursor-pointer flex items-center justify-center rounded-lg overflow-hidden w-35 gap-1 jush2-center hover:scale-105 hover:brightness-110 active:scale-95 !px-3 !py-2 border-x-2 border-l-indigo-300 border-r-purple-400 bg-linear-to-r from-indigo-600 to-purple-800'>
                                <h3 className='text-md max-md:text-sm font-bold text-white '>Résumé</h3>
                                <img className='h-5 invert' src="/svgs/open.svg" alt="download" />
                            </a>
                        </div>

                    </section>
                    <section className='w-70 max-lg:w-50 max-md:w-[70%] !mb-5'>
                        <div className='img-cont relative'>
                            <img className='rounded-xl w-full' src="/images/prayag.jpg" alt="MyPic" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
})

export default About