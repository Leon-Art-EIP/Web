import React, { useState } from 'react';
import './gallery.css';

function Gallery() {

  const [pictures, setPictures] = useState<string[]>([]);

  React.useEffect(() => {
    const seedData = [
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ",
      "https://lh3.googleusercontent.com/ci/AJFM8rwqdr4P_2MEV_92ilEISXIY16I3ab9TKeyYy67BN86mP5Z5n9jWtys5zoHo5M9Xc935QBG7sQ"
    ]
    setPictures(seedData);
  },[]);
  
  return (
    <div>
      <div className='flex justify-center'>
        <label className='text-6xl font-extrabold mt-7'><span className='leon-title'>Leon</span><span className='art-title'>'Art</span></label>
        <button className='absolute mt-9 right-7 connect-button text-xl font-extrabold'>Se connecter</button>
      </div>
      <div className='flex justify-evenly mt-10'>
        <label className='text-4xl font-bold'>Artistes</label>
        <label className='text-4xl font-bold'>Catégories</label>
        <label className='text-4xl font-bold'>Support</label>
        <label className='text-4xl font-bold'>Couleurs</label>
      </div>
      <div className='flex justify-center pb-10'>
        <div className='grid grid-cols-4 gap-8 place-items-center justify-center mt-8 mx-4'>
          {pictures.map((url, index) => (
            <div
              key={index}
              className="w-55 h-55 rounded-xl overflow-hidden bg-slate-300"
            >
              <img src={url} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  
export default Gallery;