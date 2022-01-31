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
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

const Slider = ({ slides, autoplay }) => {
  /*const autoplayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  });

  const { activeSlide, translate, transition, _slides } = state;

  useEffect(() => {
    autoplayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };

    const smooth = e => {
      if(e.target.className.includes('SliderContent')) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const interval = setInterval(play, autoplay * 1000);
    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if(transition === 0) {
      setState({
        ...state, 
        transition: 0.45
      });
    }
  }, [transition]);

  const smoothTransition = () => {
    let _slides = [];

    // Indicates last slide
    if(activeSlide === slides.length - 1) {
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    }
    // Indicates first slide. Reset to initial render
    else if(activeSlide === 0) {
      _slides = [lastSlide, firstSlide, secondSlide];
    }
    else {
      _slides = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    });
  };

  const handleResize = () => {
    setState({
      ...state,
      translate: getWidth(),
      transition: 0
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
      translate: translate + getWidth()
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
      translate: 0
    });
  };*/

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeSlide } = state;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, autoplay * 1000);
    return () => clearInterval(interval);
  }, []);

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