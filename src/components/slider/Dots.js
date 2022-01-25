/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const Dot = ({ active }) => (
  <span
    css={css`
      padding: 6px;
      margin-right: 5px;
      border-radius: 50%;
      background: ${active ? 'darkgrey' : 'white'};
    `}
  />
);

Dot.propTypes = {
  active: PropTypes.bool.isRequired
};

const Dots = ({ slides, activeSlide }) => (
  <div
    css={css`
      position: absolute;
      bottom: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
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