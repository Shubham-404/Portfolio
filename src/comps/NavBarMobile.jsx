import React from 'react';
import Li from './elems/Li';

const NavBarMobile = ({ isVisible, toggleMobileNav }) => {
  return (
    <>
      <div className={`${isVisible ? '' : 'hidden'} fixed top-0 left-0 w-full h-full bg-indigo-950/70 backdrop-blur-md z-50`}>
        <ul className={`flex h-full justify-center items-center z-100 w-full`}>
          

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
