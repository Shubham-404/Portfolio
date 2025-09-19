import React from 'react';
import "./elemStyles/Img.css";
// 
const Img = (props) => {
  return (
    <div className='tech-box border border-indigo-800/40 h-44 overflow-hidden max-lg:h-30 w-40 max-lg:w-30 max-md:w-20 max-md:h-25 p-3 pt-8 hover:pt-3 max-lg:pt-5 flex flex-col rounded-4xl max-lg:scale-80 items-center gap-15 bg-purple-900/10 shadow-[1px_1px_2px_black] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:gap-1 hover:shadow-[inset_1px_1px_5px_black] group'>
      <img className='h-25 w-25 max-lg:w-15 max-lg:h-15 rounded-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-80' src={"/images/" + props.imgAdd} alt={props.imgAdd} />
      <p className='tech-name text-lg max-lg:text-sm max-md:text-xs text-center border-gray-700 rounded-xl p-1 pr-2 pl-2 bg-gray-500/40 text-nowrap backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] shadow-[0.5px_0.5px_1px_black]'>{props.techName}</p>
    </div>
  )
}

export default Img