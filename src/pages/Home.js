import React from 'react';
//import HeroImage from '../components/content/HeroImage';
import Slider from '../components/slider/Slider';
import AboutContent from '../components/content/AboutContent';
import '../css/Home.css';
import sunset from '../images/sunset.png';
import pointreyes from '../images/pointreyes.png';

const Home = () => {

  const images = [
    sunset,
    pointreyes
  ];

  return (
    <section className='home'>
      <Slider slides={images} autoplay={5}/>
      <AboutContent />
    </section>
  );
};

export default Home; 