import React from 'react';

const Loader = () => (
  <div className="flex justify-center items-center">
    <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path fill="currentColor" d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0z"></path>
    </svg>
  </div>
);

export default Loader;
