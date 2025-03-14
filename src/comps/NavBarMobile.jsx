import React from 'react';
import Li from './elems/Li';

const NavBarMobile = ({ isVisible, toggleMobileNav }) => {
  return (
    <>
      <div className={`${isVisible ? '' : 'hidden'} fixed top-0 bottom-0 left-0 right-0 flex items-end w-full h-full bg-indigo-950/70 backdrop-blur-md z-50`}>
        <ul className={`flex flex-col h-[80vh] justify-end items-center z-100 w-full`}>
          

          <Li Click={toggleMobileNav} Tag="Intro" Href="#intro" />
          <Li Click={toggleMobileNav} Tag="About Me" Href="#about" />
          <Li Click={toggleMobileNav} Tag="Tech Stack" Href="#tech-stack" />
          <Li Click={toggleMobileNav} Tag="Projects" Href="#projects" />
          <Li Click={toggleMobileNav} Tag="Connect" Href="#connect" />
        </ul>
      </div>
    </>
  );
};

export default NavBarMobile;
