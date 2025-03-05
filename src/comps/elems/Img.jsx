import React from 'react'


const Img = (props) => {
  return (
    <div className='bg-blue-950/15 border border-indigo-300/10 h-40 w-35 !p-5 flex gap-2 flex-col gap hover:bg-blue-950/30 rounded-xl max-lg:scale-90 justify-center items-center'>
        <img className='h-20' src={"/Portfolio/images/"+props.imgAdd} alt={"/Portfolio/images/" + props.imgAdd} />
        <p className=''>{props.techName}</p>
    </div>
  )
}

export default Img