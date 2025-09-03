import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './styles/Nav.css';
import Li from './elems/Li';
import { useGSAP } from '@gsap/react';

const NavBar = ({ dark }) => {
  const [mobileNav, setMobileNav] = useState(false)

  const mobNav = useRef(null)
  const ham = useRef(null)
  const cross = useRef(null)


  const showNav = () => {
    setMobileNav(prev => !prev);
    // console.log(mobileNav);

  }

  useEffect(() => {
    const navmob = mobNav.current;
    if (navmob) {
      navmob.classList.remove('max-lg:hidden', 'max-lg:flex');
      navmob.classList.add(mobileNav ? 'max-lg:flex' : 'max-lg:hidden');
    } else {
      navmob.classList.add('flex');
    }

  }, [mobileNav])


  useEffect(() => {
    const nav = document.querySelector("#nv");
    gsap.fromTo(nav, { opacity: 0, scale: 0.7, y: -50 }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1)"
    });
  }, []);

  return (
    <nav
      id="nv"
      className='h-[5rem] z-30 relative overflow-hidden max-lg:overflow-visible !pl-10 !pr-10 max-md:!pl-5 max-md:!pr-5 rounded-full flex justify-self-center gap-5 justify-between items-center'
    >
      <div id='avatar-cont' className="pic h-20 w-20 flex items-center justify-start transition-all duration-300 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ">
        <img className='avatar' src="/images/my-ava.png" alt="avatar" />
      </div>
      <div onClick={showNav} className="goto flex">

        {
          !mobileNav ?
            <img
              id='ham'
              ref={ham}

              className={`h-10 hidden self-center justify-self-center invert cursor-pointer hover:scale-110 active:scale-90`}
              src="/svgs/menu.svg"
              alt="show"
            />
            :
            <img
              id='cross'
              ref={cross}

              className={`h-10 min-lg:hidden self-center justify-self-center invert cursor-pointer hover:scale-110 active:scale-90`}
              src="/svgs/cross.svg"
              alt="close"
            />
        }
        <ul id='UL' ref={mobNav} className={`max-lg:hidden flex z-20 h-full justify-center gap-5 items-center max-lg:text-gray-300 !p-2 max-lg:!pt-0 max-lg:!pr-0 max-lg:!pl-0 rounded-3xl w-full max-lg:flex-col max-lg:absolute max-lg:h-max max-lg:max-w-3xs right-0 top-15`}>
          <li className='max-lg:flex hidden gap-1 w-full bg-black rounded-t-full justify-start items-center !p-4 !pt-2 !pb-2'>
            <div className='h-2 w-2 rounded-full bg-green-600'></div>
            <div className='h-2 w-2 rounded-full bg-amber-600'></div>
            <div className='h-2 w-2 rounded-full bg-red-600'></div>
          </li>
          <Li Tag="Intro" Href="#intro" />
          <div className='w-[50%] h-[.5px] bg-gray-600'></div>
          <Li Tag="About Me" Href="#about" />
          <div className='w-[50%] h-[.5px] bg-gray-600'></div>
          <Li Tag="Tech Stack" Href="#tech-stack" />
          <div className='w-[50%] h-[.5px] bg-gray-500'></div>
          <Li Tag="Projects" Href="#projects" />
          <div className='w-[50%] h-[.5px] bg-gray-500'></div>
          <Li Tag="Connect" Href="#connect" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
