import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import { gsap } from 'gsap';
import './styles/Nav.css';
import Li from './elems/Li';
import { useGSAP } from '@gsap/react';
import { Rotate as Hamburger } from 'hamburger-react';

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const navRef = useRef(null);
  const mobNav = useRef(null);
  const blankRef = useRef(null);
  const heyRef = useRef(null);

  const showNav = useCallback(() => {
    setMobileNav(prev => !prev);
  }, []);

  const closeNav = useCallback(() => {
    setMobileNav(false);
  }, []);

  useGSAP(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { opacity: 0, scale: 0.7, y: -50 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1)"
        }
      );
    }
  });

  useGSAP(() => {
    if (heyRef.current) {
      gsap.to(heyRef.current, {
        opacity: 0,
        scale: 1.1,
        y: -10,
        x: 60,
        delay: 1,
        duration: 4,
        ease: "back.out(1)"
      });
    }
  });

  return (
    <>
      <nav
        ref={navRef}
        id="nv"
        className='h-[5rem] z-[1000] relative overflow-hidden max-lg:overflow-visible !px-10 max-md:!px-5 rounded-full flex justify-self-center gap-5 justify-between items-center w-[70%]'
      >
        <div id='avatar-cont' className="pic h-20 w-20 flex items-center justify-start">
          <img className='avatar' src="/images/avatar.png" alt="avatar" />
          <span ref={heyRef} className='hey -[10px] absolute px-1 bg-gray-800/60 border border-gray-500 rounded-full'>Hey</span>
        </div>
        <div className="lg:hidden z-30">
          <Hamburger  toggled={mobileNav} toggle={setMobileNav} size={25} />
        </div>
        <ul
          id='UL'
          ref={mobNav}
          className={`${mobileNav ? 'max-lg:flex' : 'max-lg:hidden'} flex z-20 h-full max-lg:justify-start items-center gap-3 max-lg:text-gray-300 !p-0 max-lg:!pb-3 rounded-3xl w-full max-lg:flex-col max-lg:absolute max-lg:h-min max-lg:max-w-40 right-0 top-15 lg:justify-end`}
        >
          <li className='max-lg:flex hidden gap-1 w-full bg-black rounded-t-full justify-start items-center !p-4 !pt-2 !pb-2'>
            <div className='h-2 w-2 rounded-full bg-red-600'></div>
            <div className='h-2 w-2 rounded-full bg-amber-600'></div>
            <div className='h-2 w-2 rounded-full bg-green-600'></div>
          </li>
          <Li Tag="About" Href="#about" toggleMobileNav={closeNav} />
          <div className='lg:hidden w-[50%] h-[.5px] bg-gray-600'></div>
          <Li Tag="Projects" Href="#projects" toggleMobileNav={closeNav} />
          <div className='lg:hidden w-[50%] h-[.5px] bg-gray-500'></div>
          <Li Tag="Connect" Href="#connect" toggleMobileNav={closeNav} />
          <div className='lg:hidden w-[50%] h-[.5px] bg-gray-500'></div>
          <Li Tag="Resume &#8599;" Target="_blank" Href="/files/shubham-resume-404.pdf" toggleMobileNav={closeNav} />
        </ul>
        <button
          onClick={closeNav}
          ref={blankRef}
          type="button"
          aria-label="Close navigation"
          className={`blank ${mobileNav ? '' : 'hidden'} -z-1 fixed h-screen w-full top-0 left-0 bg-transparent border-none`}
        />
      </nav>
    </>
  );
};

export default memo(NavBar);
