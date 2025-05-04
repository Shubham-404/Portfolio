import React from 'react'

const Li = (props) => {
  return (
    <>
      <li onClick={props.toggleMobileNav} className='h-full text-nowrap'><a className='block h-full font-code !p-2 max-lg:!p-2 max-lg:w-35 font-semibold font-ub max-lg:!pl-5 max-lg:!pr-5' href={props.Href}>{props.Tag}</a></li>
    </>
  )
}

export default Li