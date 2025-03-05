import React, { useState } from 'react'
import './styles/Nav.css'
import Li from './elems/Li'

const NavBar = () => {

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  return (
    <>
      <nav className='h-[5rem] z-50 overflow-hidden !m-5 !pl-10 !pr-10 rounded-full flex justify-self-center gap-5 justify-between items-center text-amber-200'>
        <div id='avatar-cont' className="pic h-20 flex items-center justify-start w-20 transition-all duration-300 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ">
          <img className='avatar' src="/Portfolio/images/my-ava.png" alt="avatar" />
        </div>
        <div className="goto h-full" >
          <img onClick='' id='ham' className='h-20 invert hidden cursor-pointer hover:scale-110 active:scale-90' src="/Portfolio/svgs/hamburger.svg" alt="Options" />
          <img onClick='' id='cross' className='h-18 invert hidden hover:scale-110 active:scale-90' src="/Portfolio/svgs/cross.svg" alt="Options" />
          <ul className='flex h-full justify-center items-center max-lg:grid'>
            <Li Tag="Intro" Href="#intro" />
            <Li Tag="About Me" Href="#about" />
            <Li Tag="Tech Stack" Href="#tech-stack" />
            <Li Tag="Projects" Href="#projects" />
            <Li Tag="Connect" Href="#connect" />

          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar