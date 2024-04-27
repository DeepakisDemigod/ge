import React, { useState, useEffect } from 'react';
const Template = React.lazy(() => import('../../../components/Template.jsx'));

import HashLoader from 'react-spinners/HashLoader';

const Vanilla = () => {
  const [isLoading, setIsLoading] = useState(true); // Start with true to show the initial loading message

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false); // Set isLoading to false after 900ms to stop showing the loading message
      clearInterval(intervalId); // Clear the interval to prevent memory leaks
    }, 3800);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Specify an empty dependency array to run this effect only once

  return (
    <>
      {isLoading ? (
        <div className='h-[87vh] flex flex-col items-center justify-center gap-4'>
          <HashLoader color='#2563eb' />
          <span>Brewing Console...</span>
        </div>
      ) : (
        <div className='m-2 font-dm'>
          <React.Suspense
            fallback={
              <div className='h-[87vh] flex flex-col items-center justify-center gap-4 '>
                <HashLoader color='#2563eb' />
                <span>Almost Ready...</span>
              </div>
            }
          >
            <Template template='vanilla' />
          </React.Suspense>
        </div>
      )}
    </>
  );
};

export default Vanilla;
