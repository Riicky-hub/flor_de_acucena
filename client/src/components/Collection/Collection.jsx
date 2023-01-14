import React from 'react';
import collectionImg from '../../assets/models/collection.png';
import {
  ImageModel,
  TextsContainer,
  TextTitle,
  CollectionContainer,
  TextSubtitle,
  TextNumber,
} from './styles';

const Collection = () => {
  return (
    <CollectionContainer>
      <ImageModel src={collectionImg} />
      <TextsContainer>
        <TextNumber>10</TextNumber>
        <TextTitle>October</TextTitle>
        <TextSubtitle>Collection</TextSubtitle>
      </TextsContainer>
    </CollectionContainer>
  );
};

export default Collection;
