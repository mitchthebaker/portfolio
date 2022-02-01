/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const DownloadButtonCSS = css`
  margin: 25px 25px 0px 25px;
`;

const DownloadLink = ({ src }) => {
  return (
    <Button css={DownloadButtonCSS} variant='outlined' href={src} target='_blank' download>
        Download Resume
    </Button>
  );
};

DownloadLink.propTypes = {
  src: PropTypes.string.isRequired
};

export default DownloadLink;