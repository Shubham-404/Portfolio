import React from 'react'
import "./elemStyles/Social.css"

const Social = (props) => {
    return (
        <div id='link' className='h-15 w-15 rounded-full bg-indigo-600/30 border-purple-200/10 border flex justify-center items-center '>
            <a className='' href={props.Href} target='_blank'>
                <img className='h-10 w-10 !p-1 invert' src={props.Src} alt={props.Name} />
            </a>
        </div>
    )
}

export default Social