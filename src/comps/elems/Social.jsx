import { memo } from 'react';

const Social = ({ Name, Href, Src }) => {
    return (
        <div title={Name} className='flex flex-col justify-center items-center'>
            <div className='h-15 w-15 rounded-full bg-indigo-900/60 border-purple-200/10 border flex justify-center items-center relative overflow-hidden shadow-md shadow-black/50 transition-all duration-300 !ease-[cubic-bezier(0, 0.98, 0.9, 0.79)] hover:scale-110 hover:shadow-[5px_5px_10px_rgb(16,8,27)] group'>
                <a href={Href} target='_blank' rel="noopener noreferrer" aria-label={`Visit ${Name} profile`}>
                    <img className='h-full w-full p-3 invert' src={Src} alt={Name} loading="lazy" />
                </a>
                <div className='absolute top-full h-full w-full -z-10 rounded-full left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-500 transition-all duration-300 !ease-[cubic-bezier(0, 0.98, 0.9, 0.79)] group-hover:top-0'></div>
            </div>
        </div>
    );
};

export default memo(Social);