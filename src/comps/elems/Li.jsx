import { memo } from 'react';

const Li = ({ Tag, Target, Href, toggleMobileNav }) => {
  const handleClick = () => {
    if (toggleMobileNav) {
      toggleMobileNav();
    }
  };

  return (
    <li onClick={handleClick} className='h-min text-nowrap max-lg:h-5 '>
      <a 
        className='block h-full font-code !p-2 max-lg:h-5 max-lg:!p-0 max-lg:w-15 font-semibold font-ub max-lg:text-sm' 
        target={Target} 
        href={Href}
        rel={Target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {Tag}
      </a>
    </li>
  );
};

export default memo(Li);