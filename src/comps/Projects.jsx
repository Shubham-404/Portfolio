import React from 'react';
import ImgLink from './elems/Works.jsx'
import Heading from './elems/Heading'
import CardList from './elems/CardList.jsx';


// import script from 'learn';


const Projects = () => {
  return (
    <div id='projects' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
      <div className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

        <Heading Head="Projects" />

        <p className='!p-5 text-lg/10 max-w-full max-lg:text-base/8 max-md:text-sm/5 h-full'>Some of my original and latest projects, that I have worked on are listed here.</p>
        <div className="border flex gap-5 flex-wrap w-full h-full max-md:flex-col max-md:items-center justify-center  items-center">
          <div className="flex items-center justify-center">
            <CardList />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Projects