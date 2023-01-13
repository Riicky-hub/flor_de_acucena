import React from 'react';
import { Line } from '../../globalStyles';
import {
  NewArrivalContainer,
  NewArrivalButton,
  TextsContainer,
  NewArrivalText,
  ButtonsContainer,
  ProductsContainer,
  ExploreButton,
} from './styles';
import { Product } from '../../components';
import { girl1, girl2, girl3, girl4 } from '../../assets/models/clothes';
import { forwardArrow } from '../../assets/icons/index';

const NewArrival = () => {
  return (
    <NewArrivalContainer>
      <TextsContainer>
        <NewArrivalText cap>New Arrivel</NewArrivalText>
        <Line pb='10px' pt='3px' />
      </TextsContainer>
      <ButtonsContainer>
        <NewArrivalButton transparent selected>
          All
        </NewArrivalButton>
        <NewArrivalButton transparent>Apparel</NewArrivalButton>
        <NewArrivalButton transparent>Dress</NewArrivalButton>
        <NewArrivalButton transparent>Tshirt</NewArrivalButton>
        <NewArrivalButton transparent>Bag</NewArrivalButton>
      </ButtonsContainer>
      <ProductsContainer>
        <Product
          productImg={girl1}
          productTitle='21WN reversible angora cardigan'
          productPrice={120}
        />
        <Product
          productImg={girl2}
          productTitle='21WN reversible angora cardigan'
          productPrice={120}
        />
        <Product
          productImg={girl3}
          productTitle='21WN reversible angora cardigan'
          productPrice={120}
        />
        <Product
          productImg={girl4}
          productTitle='21WN reversible angora cardigan'
          productPrice={120}
        />
      </ProductsContainer>
      <ExploreButton transparent>
        Explore More <img src={forwardArrow} />
      </ExploreButton>
    </NewArrivalContainer>
  );
};

export default NewArrival;
