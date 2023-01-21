/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { Box } from '@mui/material';

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  animation: ${loadingAnimation} 1s infinite; 
`;

const LazyImage = ({ src, alt, style }) => {
  /**
   * useRef(initialValue) is a built-in React hook that accepts one argument 
   * as the initial value and returns a reference (aka ref). 
   * A reference is an object having a special property current.
   * 
   * There are 2 rules to remember about references:
   * 
   * The value of the reference is persisted (stays the same) between component re-renderings;
   * Updating a reference doesn't trigger a component re-rendering.
   */
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  console.log(style);

  return (
    <Box>
      <Placeholder ref={refPlaceholder}/>
      <LazyLoad>
        <img
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          css={style}
        />
      </LazyLoad>
    </Box>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};

export default LazyImage;

