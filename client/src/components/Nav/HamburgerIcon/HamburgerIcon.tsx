// libraries
import React, { SetStateAction } from 'react';
import { Box } from '@mui/material';
import { Fade as Hamburger } from 'hamburger-react';

interface IHamburgerIcon {
  isOpen?: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const HamburgerIcon = ({ isOpen, setOpen }: IHamburgerIcon): JSX.Element => {
  return (
    <Box>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </Box>
  );
};

export default HamburgerIcon;