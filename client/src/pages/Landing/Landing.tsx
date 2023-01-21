// libraries
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { 
  motion, 
  useAnimation,
  useSpring,
  useScroll,
  useTransform,
  MotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// sass 
import '../../sass/pages/_landing.scss';
import '../../sass/components/_image.scss';

// components 
import Image from '../../components/Image';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Video from '../../components/Video';
import FadeContainer from '../../components/FadeContainer';
import ParallaxText from '../../components/ParallaxText';

// images 
import ggBridge from './ggBridge.jpg';
import lisbonCathedral from './lisbon.jpg';
import techPurple from './technology-purple.mp4';
import techPurplePlaceholder from './technology-purple-placeholder.png';

import arrowRightDown from '../../assets/images/arrow-right-down.svg';

const parallaxContentVariant = {
  visible: { opacity: 1, scale: 2 },
  hidden: { opacity: 0, scale: 0 },
};

const Landing = (): JSX.Element => {

  return (
    <Box className='landing'>
      <ParallaxProvider>
        <Box className='hero__container'>
          <Video 
            src={techPurple}
            placeholder={techPurplePlaceholder}
            placeholderAlt={'Purple shapes flexing and moving'}
            className={'hero__video'}
          />
          <Box className='hero__container__overlay'>
            <ParallaxText baseVelocity={-2}>
              <h1> Mitchel Baker — </h1>
            </ParallaxText>
            <Box className='hero__container__overlay__content'>
              <Image 
                src={arrowRightDown}
                alt={'Arrow angled right and down'}
                className={'arrow__right__down'}
              />
              <Box className='hero__container__overlay__content__description'>
                <Box>
                  <h2> Software Engineer </h2>
                  <h2> San Francisco, CA </h2>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <Box>
                  
                </Box>
              ),
            }
          ]}
          className='parallax'
        />
      </ParallaxProvider>
    </Box>
  );
};

/*
<ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: lisbonCathedral, speed: -20 },
            {
              speed: -10,
              children: (
                <Box className='landing--content'>
                  <h2> text 123 </h2>
                </Box>
              ),
            }
          ]}
          className='parallax'
        />

        <ParallaxBanner
          layers={[
            {
              speed: -20,
              children: (
                <motion.div 
                  ref={ref}
                  initial='hidden'
                  animate={control}
                  variants={parallaxContentVariant}
                  className='landing--content'
                >
                  <h2> text 123 </h2>
                </motion.div>
              ),
            }
          ]}
          className='parallax'
        />

        <ParallaxBanner
          layers={[
            { image: ggBridge, speed: -10 },
          ]}
          className='parallax'
        >
          <Box className='landing--content'>
            <h2> text 123 </h2>
          </Box>
        </ParallaxBanner>
      </ParallaxProvider>
*/

export default Landing;