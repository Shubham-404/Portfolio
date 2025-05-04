import React from 'react';
import './elemStyles/Button.css';

const Button = (props) => {

    const gotoLink = ()=>{
        window.open(props.Href)
    }
    return (
        <div id='lets' className='relative w-45'>
            <button onClick={gotoLink} type={props.Type} className='w-full h-10 max-md:w-40 font-mono rounded-lg absolute text-sm max-md:text-xs !text-gray-900 !p-2 font-bold flex items-center justify-center cursor-pointer'>
                {props.btn}
            </button>
            <div className="w-45 h-10 max-md:w-40 rounded-lg -z-10 bg-gradient-to-l from-indigo-500/80 from-10% via-sky-500/80 via-30% to-emerald-500/80 to-90%"></div>
        </div>
    );
}

export default Button;
