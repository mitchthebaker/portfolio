// libraries
import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { 
  motion, 
  useScroll,
  useTransform,
  MotionValue
} from 'framer-motion';

// images 
import ggBridge from './ggBridge.jpg';
import lisbonCathedral from './lisbon.jpg';

interface IImage {
  id: number;
  src: string;
  alt: string;
}

const images: Array<IImage> = [
  {
    id: 0,
    src: ggBridge,
    alt: 'The Golden Gate Bridge',
  }, 
  {
    id: 1,
    src: lisbonCathedral,
    alt: 'A Cathedral in Lisbon',
  }
];

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const ParallaxImage = ({ image }: { image: IImage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className='parallax--image'>
      <div ref={ref}>
        <img src={`${image.src}`} alt={image.alt} />
      </div>
      <div>
        <motion.h2 style={{ y }}> {image.id} </motion.h2>
        <motion.h3 style={{ y }}> Sample text  </motion.h3>
      </div>
    </section>
  );
};

const ParallaxScroll = () => {
  return (
    <Box
      sx={{
        height: '100%',
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
      }}
    >
      {images.map((image, id) => (
        <ParallaxImage key={id} image={image} />
      ))}
    </Box>
  );
};

export default ParallaxScroll;