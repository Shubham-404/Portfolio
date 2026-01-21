import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/About.css';
import Heading from './elems/Heading';
import ProfileCard from './ext-components/ProfileCard';

const About = ({ ref }) => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const children = gsap.utils.toArray(containerRef.current.children);
        if (children.length === 0) return;

        // Animate all children with a stagger, triggered when the section starts entering view
        gsap.fromTo(children,
            { opacity: 0, y: 50, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%", // Start slightly earlier
                    end: "bottom center",
                    toggleActions: "play none none reverse",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={ref} id='about' className='w-full max-md:!p-3 !pb-0 !pt-20 max-md:!pt-15 flex justify-center '>
            <div ref={containerRef} id='ab' className='!mt-10 !p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <div className="anim-item"><Heading Head="About Me" /></div>

                <div className="content !pt-5 w-full flex max-md:flex-col max-md:items-center justify-start items-center">
                    <section className='w-2/3 max-md:w-full flex flex-col justify-center items-start max-md:!p-5 max-md:!pt-0 max-md:!mb-5 '>
                        <p className='!p-5 !pb-0 text-lg/10 max-w-120 max-lg:text-sm/10 max-md:text-sm/7 h-full'>Hey, I'm Shubham. Developing reliable and secure servers along with user-friendly UI is my goal. Solving real-world problems, and constantly learning new techs. Currently working on building backend servers exploring machine learning. Always up for a challenge and excited to create impactful solutions.</p>
                        <div className='flex flex-wrap items-center justify-between gap-5 !ml-4 !mt-3 w-[65%] max-w-lg'>

                            <a className='' target='_blank' rel="noopener noreferrer" href="https://linkedin.com/in/shubham-404-/">
                                <strong className='flex items-center justify-between gap-2 !px-3 !py-2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg hover:scale-105 border-2 border-blue-500/30 hover:border-blue-500/50 hover:from-blue-600/60 text-nowrap'>Let's connect! <img className='h-6 rounded-md' src="/svgs/linkedin-color.svg" alt="LinkedIn" /></strong></a>
                            <a target='_blank' rel="noopener noreferrer" href='/files/shubham-resume-404.pdf' className='cursor-pointer flex items-center justify-center rounded-lg overflow-hidden w-35 gap-1 jush2-center hover:scale-105 hover:brightness-110 active:scale-95 !px-3 !py-2 border-x-2 border-l-indigo-300 border-r-purple-400 bg-linear-to-r from-indigo-600 to-purple-800'>
                                <h3 className='text-md max-md:text-sm font-bold text-white '>Résumé</h3>
                                <img className='h-5 invert' src="/svgs/open.svg" alt="download" />
                            </a>
                        </div>

                    </section>
                    <section className='w-70 max-lg:w-50 max-md:w-[70%] !mb-5'>
                        <ProfileCard
                            name="Shubham"
                            title="Aspiring Software Engineer"
                            handle="Shubham-404"
                            status="Learner"
                            contactText="GitHub"
                            iconUrl="/images/iconpattern.png"
                            avatarUrl="/images/prayag21.png"
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={true}
                            onContactClick={() => window.open("https://github.com/Shubham-404", "_blank")}
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;
