import React from 'react'

const Li = (props) => {
  return (
    <>
    <li className='h-full text-nowrap'><a className='text-amber-200 flex items-center h-full font-code !p-2 hover:font-bold' href={props.Href}>&lt;{props.Tag}/&gt;</a></li>
    </>
  )
}

export default Li