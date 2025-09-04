import React, { useEffect, useRef } from 'react';
import './elemStyles/Button.css';

const Button = (props) => {
    const githubRef = useRef(null);

    useEffect(() => {
        if (props.play) {
            githubRef.current.classList.remove("scale-0", "w-0")
            githubRef.current.classList.add("scale-100", "w-5")
        } else if (!props.play) {
            githubRef.current.classList.add("scale-0", "w-0")
            githubRef.current.classList.remove("scale-100", "w-5")
        }
    }, [props.play])

    const gotoLink = () => {
        window.open(props.Href)
    }
    return (
        <div id='lets' className='relative w-45'>
            <button onClick={gotoLink} type={props.Type} className='w-full h-10 max-md:w-40 font-mono rounded-lg absolute text-sm max-md:text-xs !text-gray-900 !p-2 !font-extrabold flex items-center justify-center cursor-pointer'>
                {props.btn}&nbsp;
                <img ref={githubRef} className='h-5 scale-0 w-0' src="/images/github-gif.gif" alt="" />
            </button>
            <div className="w-45 h-10 max-md:w-40 rounded-lg -z-10 bg-gradient-to-l from-indigo-500/80 from-10% via-sky-500/80 via-30% to-emerald-500/80 to-90% shadow-xl"></div>
        </div>
    );
}

export default Button;
