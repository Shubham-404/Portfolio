import React from 'react'
import "./styles/About.css"

const About = () => {
    return (
        <div id='about' className='min-h-100 w-full !p-10 max-md:!p-3 !pb-0 flex justify-center items-center'>
            <div className='!mt-10 !p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>
                <div className=' flex items-center w-full gap-5'>
                    <h1 className='text-2xl max-md:text-lg self-start font-code'>&lt;About Me/&gt;</h1>
                    <div className='h-[1px] w-2/3 rounded-2xl bg-linear-to-bl from-purple-900 via-purple-500 to-fuchsia-200'></div>
                </div>
                <div className="content !pt-5 w-full h-full flex max-md:flex-col max-md:items-center justify-start  items-center">
                    <section className='w-2/3 max-md:w-full h-full flex justify-center items-center'>
                        <p className='!p-5 text-lg/10 max-w-120 max-lg:text-base/8 max-md:text-sm/5 h-full'>Hey, I'm Shubham, a web developer and AI/ML enthusiast. I love building cool stuff with code, solving real-world problems, and constantly learning new things. Currently diving deep into backend development and machine learning. Always up for a challenge and excited to create impactful solutions. Let’s connect! 🚀</p>
                    </section>
                    <section className='!pt-5 max-md:w-50 h-full flex justify-start items-center'>
                        <div className='img-cont w-full relative flex justify-center items-center shadow-2xl'>
                            <img className='rounded-xl w-70 max-lg:w-50' src="/Portfolio/images/prayag.jpg" alt="MyPic" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About