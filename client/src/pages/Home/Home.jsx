import React from 'react';
import { Companies, Hero, NewArrival, Collections, Trending, AboutUs, Instagram } from '../../layout';
import { CarrouselDesk } from '../../components';

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewArrival />
      <Companies />
      {window.innerWidth >= 990 ? (
        <CarrouselDesk />
      ) : (
        <>
          <Collections />
          <Trending />
        </>
      )}
      <AboutUs />
      <Instagram />
    </>
  );
};

export default HomePage;
