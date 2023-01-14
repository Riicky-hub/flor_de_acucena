import React from 'react';
import { ProductImg, ProductContainer, ProductTitle } from './styles';

const Product = ({ productImg, productTitle, productPrice, ImgWidth }) => {
  return (
    <ProductContainer>
      <ProductImg src={productImg} width={ImgWidth} />
      <ProductTitle size='sm'>{productTitle}</ProductTitle>
      <ProductTitle orange size='md'>{`$${productPrice}`}</ProductTitle>
    </ProductContainer>
  );
};

export default Product;
