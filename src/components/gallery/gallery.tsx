import React, { useState } from 'react';
import './gallery.css';

function Gallery() {
  
    return (
      <div>
        <div className='flex justify-center'>
          <label className='text-6xl font-extrabold mt-7'><span className='leon-title'>Leon</span><span className='art-title'>'Art</span></label>
          <button className='absolute mt-9 right-7 connect-button text-xl font-extrabold'>Se connecter</button>
        </div>
      </div>
    );
  }
  
  export default Gallery;