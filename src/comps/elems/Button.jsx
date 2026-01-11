import React, { memo, useCallback } from 'react';

const Button = ({ Href, btn, play }) => {
    const gotoLink = useCallback(() => {
        if (Href) {
            window.open(Href, '_blank', 'noopener,noreferrer');
        }
    }, [Href]);
    return (
        <div className='relative w-45 group transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]'>
            <button 
                onClick={gotoLink} 
                type="button"
                aria-label={`${btn} - Opens in new tab`}
                className='w-full h-10 max-md:w-40 font-mono rounded-lg absolute text-sm max-md:text-xs text-gray-900 p-2 font-extrabold flex items-center justify-center cursor-pointer bg-white/50 border border-white/20 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)] -translate-x-1 -translate-y-1 group-hover:-translate-x-2 group-hover:-translate-y-2 active:translate-x-0 active:translate-y-0 shadow-2xl shadow-black/50'
            >
                {btn}&nbsp;
                {play ? (
                    <img className='h-5' src="/images/github-gif.gif" alt="GitHub animated" />
                ) : (
                    <img className='h-5' src="/images/github-static.png" alt="GitHub" />
                )}
            </button>
            <div className="w-45 h-10 max-md:w-40  rounded-lg -z-10 bg-gradient-to-l from-indigo-500/80 from-10% via-sky-500/80 via-30% to-emerald-500/80 to-90% shadow-xl"></div>
        </div>
    );
}

export default memo(Button);
