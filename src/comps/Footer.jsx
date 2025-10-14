import Social from './elems/Social';
import { lazy } from 'react';

const Footer = () => {
  return (
    <div className=''>
      <footer className='w-full bg-opacity-60 text-center py-12 font-ubuntu'>
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <p className='text-3xl font-semibold max-lg:text-2xl max-md:text-xl max-sm:text-lg'>Connect with Me</p>
          
          <section className='flex justify-between w-full max-md:max-w-70 max-w-80 flex-wrap'>
            <Social Name="Github" Src="/svgs/github.svg" Href="https://github.com/Shubham-404/" />
            <Social Name="LinkedIn" Src="/svgs/linkedin.svg" Href="https://linkedin.com/in/shubham-404-/" />
            <Social Name="Instagram" Src="/svgs/instagram.svg" Href="https://instagram.com/shubham_404___/" />
            <Social Name="Medium" Src="/svgs/medium.svg" Href="https://medium.com/@shubham-404" />
          </section>
        </div>

        <div className='flex flex-col items-center justify-center text-md gap-3 bg-opacity-50 rounded-lg px-6 py-4 max-w-xs mx-auto backdrop-blur-md'>
          <h4 className='font-ubmono'>
             Created with 🤍 by Shubham
          </h4>
          <h4 className='font-ubmono'>
             Last updated: Sep'25
          </h4>
      
          <h4 className='text-xs'>
            <span className='opacity-50'>Inspired by </span> <span className='text-indigo-500 font-semibold'>Saurabh Patil</span>
          </h4>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
