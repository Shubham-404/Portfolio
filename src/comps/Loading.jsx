import React, { useEffect, useState } from 'react';
import './styles/Loading.css';  // You will create this CSS file for the animation styles

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as per the loading requirement
  }, []);

  return (
    <div className={`loading-container ${isLoading ? 'loading' : 'loaded'}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
