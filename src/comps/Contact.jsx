import React from 'react'
import Img from './elems/Img.jsx'
import Social from './elems/Social.jsx'
import Heading from './elems/Heading'


const TechStack = () => {
    return (
        <div id='connect' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
            <div className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>
                
            <Heading Head = "Connect"/>
                
                <p className='!p-5 text-6xl font-bold max-w-full max-lg:text-5xl max-md:text-3xl h-full'>Let's Connect.</p>
                <div className="flex gap-5 flex-wrap !pt-5 w-full h-full max-md:flex-col max-md:items-center justify-start  items-center">
                    <section className=' w-full h-full flex justify-evenly items-center flex-wrap'>
                        <Social Name="Github" Src="/Portfolio/svgs/github.svg" Href="https://github.com/Shubham-404/"/>
                        <Social Name="LinkedIn" Src="/Portfolio/svgs/linkedin.svg" Href="https://linkedin.com/in/shubham-singh404/"/>
                        <Social Name="Instagram" Src="/Portfolio/svgs/instagram.svg" Href="https://instagram.com/shubham_404___/"/>
                        <Social Name="Extra" Src="/Portfolio/svgs/namaste.svg" Href="https://github.com/Shubham-404/"/>
                    </section>
                    <p className='!p-5 text-6xl font-bold max-w-full max-lg:text-5xl max-md:text-3xl h-full'>To know more about me!</p>


                </div>
            </div>
        </div>
    )
}

export default TechStack