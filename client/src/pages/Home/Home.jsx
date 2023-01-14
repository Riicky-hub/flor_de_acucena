import React from 'react';
import {
  Companies,
  Hero,
  NewArrival,
  Collections,
  Tranding,
} from '../../layout';
import { HomeNavbar } from './styles';

const HomePage = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <NewArrival />
      <Companies />
      <Collections />
      <Tranding />
    </>
  );
};

export default HomePage;
