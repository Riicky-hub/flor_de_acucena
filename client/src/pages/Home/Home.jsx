import React from 'react';
import {
  Companies,
  Hero,
  NewArrival,
  Collections,
  Trending,
  AboutUs,
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
      <Trending />
      <AboutUs />
    </>
  );
};

export default HomePage;
