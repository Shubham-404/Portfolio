import React from 'react'

const Li = (props) => {
  return (
    <>
    <li onClick={props.toggleMobileNav} className='h-full text-nowrap'><a className='text-indigo-600 flex items-center h-full font-code !p-2' href={props.Href}>&lt;{props.Tag}/&gt;</a></li>
    </>
  )
}

export default Li