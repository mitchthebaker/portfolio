import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import '../../css/HeroImage.css';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  z-index: 900;
  width: 100%;
  height: 100vh;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`};

  img {
    width: 100%;
    height: 100%;
  }
`;

const Carousel = ({images, setWidth, xPosition, handlePrevClick, handleNextClick}) => {
  const slideRef = useRef();

  console.log(images);

  useEffect(() => {
    if(slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);

  return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {
          images.map((img, i) => (
            <img src={img} alt={`Image ${i + 1}`} key={i}/>
          ))
        }
      </Slide>
      <Buttons
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </Wrapper>  
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  setWidth: PropTypes.func.isRequired,
  xPosition: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
};

export default Carousel;

