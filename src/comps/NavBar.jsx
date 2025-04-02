import React from 'react';
import './styles/Nav.css';
import Li from './elems/Li';

const NavBar = ({ toggleMobileNav, ref }) => {
  return (
    <>
      <nav ref={ref} className='h-[5rem] z-50 overflow-hidden !m-5 !pl-10 !pr-10 rounded-full flex justify-self-center gap-5 justify-between items-center text-amber-200'>
        <div id='avatar-cont' className="pic h-20 flex items-center justify-start w-20 transition-all duration-300 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ">
          <img className='avatar' src="/Portfolio/images/my-ava.png" alt="avatar" />
        </div>
        <div className="goto h-full">
          <img
            id='ham'
            onClick={toggleMobileNav}
            className={`h-20 invert cursor-pointer hover:scale-110 active:scale-90 z-220 absolute right-5 top-0 min-lg:hidden min-lg:opacity-0`}
            src="/Portfolio/svgs/hamburger.svg"
            alt="Options"
          />
          <img
            id='cross'
            onClick={toggleMobileNav}
            className={`!p-1 h-16 hidden invert cursor-pointer hover:scale-110 active:scale-90 z-220 absolute right-5 top-1`}
            src="/Portfolio/svgs/cross.svg"
            alt="Options"
          />
          <ul id='UL' className={`flex h-full justify-center items-center rounded-3xl w-full max-lg:hidden`}>
            <Li Click={toggleMobileNav} Tag="Intro" Href="#intro" />
            <Li Click={toggleMobileNav} Tag="About Me" Href="#about" />
            <Li Click={toggleMobileNav} Tag="Tech Stack" Href="#tech-stack" />
            <Li Click={toggleMobileNav} Tag="Projects" Href="#projects" />
            <Li Click={toggleMobileNav} Tag="Connect" Href="#connect" />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
