/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

const SliderContent = props => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
);

SliderContent.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired
};

export default SliderContent;