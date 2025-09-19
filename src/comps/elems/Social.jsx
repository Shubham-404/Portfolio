import React from 'react'
import "./elemStyles/Social.css"

const Social = (props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='h-15 w-15 rounded-full bg-indigo-900/60 border-purple-200/10 border flex justify-center items-center relative overflow-hidden shadow-[5px_5px_5px_rgb(16,8,27)] transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-110 hover:shadow-[5px_5px_10px_rgb(16,8,27)] group'>
                <a className='' href={props.Href} target='_blank'>
                    <img className='h-10 w-10 p-1 invert' src={props.Src} alt={props.Name} />
                </a>
                <div className='absolute top-full h-full w-full -z-10 rounded-full left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-purple-600 to-purple-900 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:top-0'></div>
            </div>
            <div className='overflow-hidden border-0 px-2 mt-2 rounded-full border-gray-700'>{props.Name}</div>
        </div>
    )
}

export default Social