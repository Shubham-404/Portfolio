import Social from './elems/Social';
import { lazy } from 'react';

const Footer = () => {
  return (
    <div className='bg-[url(/images/space.gif)] bg-center bg-cover bg-no-repeat '>
      <footer className='w-full bg-t text-center !py-10 text-white font-ubuntu flex flex-col justify-center items-center text-lg max-lg:text-base max-md:text-sm max-sm:text-xs'>
        <div className="w-full h-full flex gap-5 flex-wrap flex-col max-md:items-center justify-center items-center">
          <p className='!p-3 text-5xl font-bold max-w-full max-lg:text-4xl max-md:text-2xl h-full text-center'>Social media handles</p>
          <section className='w-full h-full flex justify-center gap-5 items-center flex-wrap !mb-10'>
            <Social Name="Github" Src="/svgs/github.svg" Href="https://github.com/Shubham-404/" />
            <Social Name="LinkedIn" Src="/svgs/linkedin.svg" Href="https://linkedin.com/in/shubham-404-/" />
            <Social Name="Instagram" Src="/svgs/instagram.svg" Href="https://instagram.com/shubham_404___/" />
            <Social Name="Medium" Src="/svgs/medium.svg" Href="https://medium.com/@shubham-404" />
          </section>
        </div>

        <div className='border border-green-600/40 rounded-md !p-4 !py-5 w-min text-nowrap flex flex-col items-start justify-start backdrop-blur-sm'>
          <h4 className='font-ubmono text-white'><span className='text-green-600/80'>~@linux:~$</span> Created with 🤍 by Shubham</h4>
          <h4 className='font-ubmono text-white'><span className='text-green-600/80'>~@linux:~$</span> Last updated: Sep'25</h4>
          <h4 className='font-ubmono text-white'><span className='text-green-600/80'>~@linux:~$</span><span className='font-bold motion-safe:animate-ping'>&nbsp;|</span></h4>
          <h4 className='font-ubmono text-white/70 text-xs border border-indigo-500/70 rounded-lg p-1 mt-1'>Inspired by<span className='text-blue-300/70'> Saurabh Patil</span></h4>
        </div>
      </footer>
    </div>
  )
}

export default Footer
