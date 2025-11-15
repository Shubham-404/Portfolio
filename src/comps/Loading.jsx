import { memo } from 'react';
import './styles/Loading.css';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <img className='h-40 w-40' src="/images/Scene2.gif" alt="Loading..." />
    </div>
  );
};

export default memo(Loading);
