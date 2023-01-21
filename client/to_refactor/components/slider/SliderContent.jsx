/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const SliderContent = ({ translate, transition, width, children }) => (
  <div
    css={css`
      transform: translateX(-${translate}px);
      transition: transform ease-out ${transition}s;
      height: 100%;
      width: ${width}px;
      display: flex;
    `}
  >
    {children}
  </div>
);

SliderContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired
};

export default SliderContent;