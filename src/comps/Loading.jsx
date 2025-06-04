import React from 'react';
import './styles/Loading.css';  // You will create this CSS file for the animation styles

const Loading = ({ isLoading }) => {
  return (
    <div className={`loading-container ${!isLoading ? 'loaded' : ''}`}>
      {/* <div className="spinner"></div> */}
      <img className='h-40 w-40' src="/Portfolio/images/Scene2.gif" alt="loader" />
    </div>
  );
};

export default Loading;
