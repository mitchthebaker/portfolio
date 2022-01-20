import React from 'react';
import HeroImage from '../components/content/HeroImage';
import AboutContent from '../components/content/AboutContent';
import '../css/Home.css';

const Home = () => {
  return (
    <section className='home'>
      <HeroImage />
      <AboutContent />
    </section>
  );
};

export default Home; 