// src/components/Loader.js
import React from 'react';

import './loader.css'
const Loader = () => {
  return (
    <div className='loader-container w-screen h-screen flex justify-center items-center'>
     <div className="loader" id="loader-2">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
  );
};


export default Loader;
