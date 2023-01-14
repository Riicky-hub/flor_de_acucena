import React from 'react';
import { Companies, Hero, NewArrival, Collections } from '../../layout';
import { HomeNavbar } from './styles';

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <NewArrival />
      <Companies />
      <Collections />
    </>
  );
};

export default HomePage;
