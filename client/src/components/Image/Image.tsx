// libraries
import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

// sass 
import '../../sass/components/_image.scss';

interface IImage {
  src: string;
  title: string;
  className: string;
}

const Image = ({ src, title, className }: IImage): JSX.Element => {
  const [isLoaded, setLoaded] = useState(false);

  const handleIsLoaded = () => {
    setTimeout(() => {
      setLoaded(!isLoaded);
    }, 1500);
  };  

  return (
    <Box className='image'>
      {
        !isLoaded ? 
          <Skeleton variant='rectangular' /> :  
          <></>
      }
      <img onLoad={handleIsLoaded} className={className} src={src} alt={title} />
    </Box>
  );
};

export default Image;