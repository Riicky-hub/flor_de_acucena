import React from 'react';
import {
  Companies,
  Hero,
  NewArrival,
  Collections,
  Trending,
  AboutUs,
  Instagram,
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
      <Instagram />
    </>
  );
};

export default HomePage;
