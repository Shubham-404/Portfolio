import React, { useState } from 'react'
import './styles/Intro.css'
import Button from './elems/Button'

const Home = () => {

  const [Namaste, setNamaste] = useState("  ")

  return (
    <div className="Intro !pt-10 grid justify-center items-center">

      <main className='justify-self-center !pb-10 max-w-7xl text-lg/20'>
        <h1 onClick={()=>{Namaste == "  " ? setNamaste("🙏") : setNamaste("  ")}} className='transition- font-code font-semibold text-4xl !pb-5 max-lg:text-3xl max-md:text-2xl'>Namaste({Namaste}); I am</h1>
        <h1 onClick={()=>{Namaste == "  " ? setNamaste("🙏") : setNamaste("  ")}} className='name text-7xl font-bold font-hawk text-transparent max-lg:text-6xl max-md:text-5xl bg-clip-text inline'>Shubham.</h1>
        <h1 className='text-7xl font-bold font-hawk max-lg:text-6xl max-md:text-5xl'>Creativity & Code!</h1>
        <h1 className='text-xl text-gray-300 !pt-10 max-lg:text-lg max-md:text-sm'>Creative Front-End Developer currently building projects and learning Back-End.</h1>
      </main>
        <Button link="https://linkedin.com/in/shubham-singh404" btn="LinkedIn" />
    </div>
  )
} 

export default Home