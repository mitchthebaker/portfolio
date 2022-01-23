import React, { useState/*, useEffect*/ } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import '../../css/HeroImage.css';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
`;

const HeroImage = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);  

  

  const handlePrevClick = () => {
    if(index === 0)
      return;
    
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleNextClick = () => {
    if(index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    }
    else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  /*useEffect(() => {
    const handleAutoplay = setInterval(handleNextClick, 5000);
    return () => clearInterval(handleAutoplay);
  }, [handleNextClick]);*/

  return (
    <Wrapper>
      <Carousel
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </Wrapper>
  );
};

export default HeroImage;

/*return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          Welcome to my domain!
        </h1>
        <h2 className='hero-subtitle'>
          The creative outputs of Mitchel Baker
        </h2>
      </div>
    </section>
  );*/