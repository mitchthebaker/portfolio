// libaries
import React from 'react';
import { Box } from '@mui/material';

// sass
import '../../sass/components/_footer.scss';

const Footer = () => {
  return (
    <Box className='footer'>
      <ul>
        <li> Work </li>
        <li> Projects </li>
        <li> Connect </li>
      </ul>
    </Box>
  );
};

export default Footer;