import React from 'react'
import './styles/Intro.css'
import Button from './Button'

const Home = () => {
  return (
    <div className="Intro !pt-10 grid justify-center items-center">

      <main className='justify-self-center !pb-10 max-w-7xl text-lg/20'>
        <h1 className='font-code font-semibold text-4xl !pb-5'>Namaste(); I am</h1>
        <h1 className='name text-7xl font-bold font-hawk text-transparent bg-clip-text inline'>Shubham.</h1>
        <h1 className='text-7xl font-bold font-hawk'>Creativity & Code!</h1>
        <h1 className='text-xl text-gray-300 !pt-10'>Creative Front-End Developer currently building projects and learning Back-End.</h1>
      </main>
        <Button link="https://google.com" btn="Let's Connect" />
    </div>
  )
}

export default Home