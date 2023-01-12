import React from 'react';
import { Hero, NewArrival } from '../../layout';
import { HomeNavbar } from './styles';

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <NewArrival />
    </>
  );
};

export default HomePage;
