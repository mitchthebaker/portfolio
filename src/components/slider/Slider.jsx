/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import Title from './Title';

const getWidth = () => window.innerWidth;

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Slider = ({ slides, autoplay }) => {
  const autoplayRef = useRef();
  const resizeRef = useRef();

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeSlide } = state;
  

  useEffect(() => {
    autoplayRef.current = nextSlide;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    const interval = setInterval(play, autoplay * 1000);
    const onResize = window.addEventListener('resize', resize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleResize = () => {
    setState({
      ...state,
      translate: 0,
      transition: 0.45
    });
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeSlide: slides.length - 1
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * getWidth()
    });
  };

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0
      });
    }

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * getWidth()
    });
  };

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, i) => (
          <Slide width={getWidth()} key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction='left' handleClick={prevSlide}/>
      <Arrow direction='right' handleClick={nextSlide}/>

      <Dots slides={slides} activeSlide={activeSlide}/>
      <Title />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  autoplay: PropTypes.number.isRequired
};

export default Slider; 