import React from 'react';
import { Line } from '../../globalStyles';
import {
  Boss,
  Burberry,
  Catier,
  Gucci,
  Prada,
  TiffanyAndCo,
} from '../../assets/logos';
import { CompaniesContainer, LogosContainer } from './styles';

const Companies = () => {
  return (
    <CompaniesContainer>
      <Line />
      <LogosContainer>
        <img src={Prada} />
        <img src={Burberry} />
        <img src={Boss} />
        <img src={Catier} />
        <img src={Gucci} />
        <img src={TiffanyAndCo} />
      </LogosContainer>
      <Line />
    </CompaniesContainer>
  );
};

export default Companies;
