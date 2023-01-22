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
  ButtonContainer,
  ButtonIcon,
} from './styles';
import { Product } from '../../components';
import { girl1, girl2, girl3, girl4 } from '../../assets/models/clothes';
import { forwardArrow, bulletOrange } from '../../assets/icons/index';

const NewArrival = () => {
  const buttons = document.querySelectorAll('#NewArrivalBtn');
  const arrButtons = Array.from(buttons);
  function removeSelected() {
    console.log(arrButtons);
    arrButtons.map((el) => {
      el.removeAttribute('selected');
      el.removeChild(el.children[1]);
    });
  }
  return (
    <NewArrivalContainer>
      <TextsContainer>
        <NewArrivalText cap>New Arrival</NewArrivalText>
        <Line pb='10px' pt='3px' />
      </TextsContainer>
      <ButtonsContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={() => removeSelected()}>
          <NewArrivalButton transparent>All</NewArrivalButton>
          <ButtonIcon src={bulletOrange} id='icon' />
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={() => removeSelected()}>
          <NewArrivalButton transparent>Apparel</NewArrivalButton>
          <ButtonIcon src={bulletOrange} />
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={() => removeSelected()}>
          <NewArrivalButton transparent>Dress</NewArrivalButton>
          <ButtonIcon src={bulletOrange} />
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={() => removeSelected()}>
          <NewArrivalButton transparent>Tshirt</NewArrivalButton>
          <ButtonIcon src={bulletOrange} />
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={() => removeSelected()}>
          <NewArrivalButton transparent>Bag</NewArrivalButton>
          <ButtonIcon src={bulletOrange} />
        </ButtonContainer>
      </ButtonsContainer>
      <ProductsContainer>
        <Product productImg={girl1} productTitle='21WN reversible angora cardigan' productPrice={120} />
        <Product productImg={girl2} productTitle='21WN reversible angora cardigan' productPrice={120} />
        <Product productImg={girl3} productTitle='21WN reversible angora cardigan' productPrice={120} />
        <Product productImg={girl4} productTitle='21WN reversible angora cardigan' productPrice={120} />
      </ProductsContainer>
      <ExploreButton transparent>
        Explore More <img src={forwardArrow} />
      </ExploreButton>
    </NewArrivalContainer>
  );
};

export default NewArrival;
