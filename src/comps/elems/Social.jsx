import React from 'react'
import "./elemStyles/Social.css"

const Social = (props) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div id='link' className='h-15 w-15 rounded-full bg-indigo-900/60 border-purple-200/10 border flex justify-center items-center '>
                <a className='' href={props.Href} target='_blank'>
                    <img className='h-10 w-10 !p-1 invert' src={props.Src} alt={props.Name} />
                </a>
            </div>
            <div className='overflow-hidden border-0 !px-2 !mt-2 rounded-full border-gray-700'>{props.Name}</div>
        </div>
    )
}

export default Social