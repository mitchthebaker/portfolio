import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import '../../css/Navbar.css';

const Navbar = () => {
  return (
    <section className='navbar'>
      <Logo />
      <Navigation />
    </section>
  );
};

export default Navbar;