import React, { useState } from 'react';
import { Box } from '@mui/material';

interface IVideo {
  src: string;
  placeholder: string;
  placeholderAlt: string;
  className: string;
}

const Video = ({ src, placeholder, placeholderAlt, className }: IVideo) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const handleIsLoaded = () => {
    setLoaded(!loaded);
  };

  return (
    <Box
      className={`${className}`}
    >
      {!loaded && (
        <img 
          src={placeholder}
          alt={placeholderAlt}
          className='hero__video--placeholder'
        />
      )}
      <video
        onLoadedData={handleIsLoaded}
        style={{ opacity: loaded ? 1 : 0 }}
        controls={false}
	loop
        autoPlay={true}
        defaultMuted
	muted={true}
        playsInline={true}
        preload='metadata'
      >
        <source src={src} type='video/mp4' />
      </video>
    </Box>
  );
};

export default Video;
