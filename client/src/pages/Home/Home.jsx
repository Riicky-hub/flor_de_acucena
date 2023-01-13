import React from 'react';
import { Companies, Hero, NewArrival } from '../../layout';
import { HomeNavbar } from './styles';

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <NewArrival />
      <Companies />
    </>
  );
};

export default HomePage;
