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
} from './styles';
import { Product } from '../../components';
import { girl1, girl2, girl3, girl4 } from '../../assets/models/clothes';
import { forwardArrow, bulletOrange } from '../../assets/icons/index';

const NewArrival = () => {
  function removeSelected() {
    const buttons = document.querySelectorAll('#NewArrivalBtn');
    const arrButtons = Array.from(buttons);
    arrButtons.map((el) => {
      el.removeAttribute('selected');
      if (el.children[1]) el.removeChild(el.children[1]);
    });
  }
  function addSelected(element) {
    const Icon = document.createElement('img');
    Icon.setAttribute('src', `${bulletOrange}`);
    Icon.setAttribute('width', `10px`);
    const div = element.target.parentElement;
    element.preventDefault();
    removeSelected();
    div.appendChild(Icon);
  }
  return (
    <NewArrivalContainer>
      <TextsContainer>
        <NewArrivalText cap>New Arrival</NewArrivalText>
        <Line pb='10px' pt='3px' />
      </TextsContainer>
      <ButtonsContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={(e) => addSelected(e)}>
          <NewArrivalButton transparent>All</NewArrivalButton>
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={(e) => addSelected(e)}>
          <NewArrivalButton transparent>Apparel</NewArrivalButton>
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={(e) => addSelected(e)}>
          <NewArrivalButton transparent>Dress</NewArrivalButton>
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={(e) => addSelected(e)}>
          <NewArrivalButton transparent>Tshirt</NewArrivalButton>
        </ButtonContainer>
        <ButtonContainer id='NewArrivalBtn' onClick={(e) => addSelected(e)}>
          <NewArrivalButton transparent>Bag</NewArrivalButton>
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
