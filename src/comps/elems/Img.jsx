import React from 'react';
import "./elemStyles/Img.css";
// 
const Img = (props) => {
  return (
    <div className='tech-box h-44 min-w-40 !p-3 !pt-8 hover:!pt-3 flex flex-col overflow-hidden rounded-4xl max-lg:scale-90'>
      <img className='h-25 w-25' src={"/Portfolio/images/" + props.imgAdd} alt={props.imgAdd} />
      <p className='tech-name text-lg text-center border-gray-700 rounded-xl !p-1 !pr-2 !pl-2 bg-gray-500/40 text-nowrap backdrop-blur-2xl'>{props.techName}</p>
    </div>
  )
}

export default Img