import { memo } from 'react';

const Heading = ({ Head, className = '' }) => {
    return (
        <div className={`flex items-center w-[90%] justify-center max-w-220 gap-5 max-md:gap-2 ${className}`}>
            <h1 className='text-3xl max-md:text-lg font-mono font-bold text-nowrap'>
                &lt;{Head}/&gt;
            </h1>
            <div className='h-[1px] w-2/3 rounded-2xl bg-linear-to-bl from-purple-900 via-purple-500 to-fuchsia-200'></div>
        </div>
    );
};

export default memo(Heading);