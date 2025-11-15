import { memo } from 'react';

const Util = ({ Tech }) => {
  return (
    <div className='!py-1 !px-2 rounded-full border border-gray-600'>
      {Tech}
    </div>
  );
};

export default memo(Util);