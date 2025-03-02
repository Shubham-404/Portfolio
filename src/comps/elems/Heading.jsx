import React from 'react'

const Heading = (props) => {
    return (
        <div className=' flex items-center w-full gap-5'>
            <h1 className='text-2xl max-md:text-lg self-start font-code text-nowrap'>&lt;{props.Head}/&gt;</h1>
            <div className='h-[1px] w-2/3 rounded-2xl bg-linear-to-bl from-purple-900 via-purple-500 to-fuchsia-200'></div>
        </div>
    )
}

export default Heading