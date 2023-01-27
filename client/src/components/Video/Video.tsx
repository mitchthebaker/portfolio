import React, { createRef, useState } from 'react';
import { Box } from '@mui/material';

interface IVideo {
  src: string;
  placeholder: string;
  placeholderAlt: string;
  className: string;
}

const Video = ({ src, placeholder, placeholderAlt, className }: IVideo) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const videoRef = createRef<HTMLVideoElement>();

  const handleIsLoaded = () => {
    setLoaded(!loaded);
    videoRef.current?.play();
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
        ref={videoRef}
        onLoadedMetadata={handleIsLoaded}
        controls={false}
        loop
        autoPlay={true}
        muted={true}
        playsInline={true}
        preload='metadata'
      >
        <source src={src} type='video/mp4' />
        <img className='placeholder' src={placeholder} title={'Your browser does not support the <video> tag.'}/>
      </video>
    </Box>
  );
};

export default Video;
