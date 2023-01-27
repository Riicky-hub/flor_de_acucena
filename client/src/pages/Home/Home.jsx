import React from 'react';
import { Companies, Hero, NewArrival, Collections, Trending, AboutUs, Instagram } from '../../layout';

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewArrival />
      <Companies />
      <Collections />
      <Trending />
      <AboutUs />
      <Instagram />
    </>
  );
};

export default HomePage;
