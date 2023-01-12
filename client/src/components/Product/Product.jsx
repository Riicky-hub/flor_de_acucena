import React from 'react';
import { ProductImg, ProductContainer, ProductTitle } from './styles';

const Product = ({ productImg, productTitle, productPrice }) => {
  return (
    <ProductContainer>
      <ProductImg src={productImg} />
      <ProductTitle size='sm'>{productTitle}</ProductTitle>
      <ProductTitle orange size='md'>{`$${productPrice}`}</ProductTitle>
    </ProductContainer>
  );
};

export default Product;
