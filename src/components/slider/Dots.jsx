/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';
import Dot from './Dot';

const DotsCSS = css`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dots = ({ slides, activeSlide }) => (
  <div css={DotsCSS}>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i}/>
    ))}
  </div>
);

Dots.propTypes = {
  slides: PropTypes.array.isRequired,
  activeSlide: PropTypes.number.isRequired
};

export default Dots;