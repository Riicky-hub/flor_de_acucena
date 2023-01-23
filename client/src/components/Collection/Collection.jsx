import React from 'react';
import collectionImg from '../../assets/models/collection.png';
import collectionImgTablet from '../../assets/models/TabletCollection.jpg';
import { ImageModel, TextsContainer, TextTitle, CollectionContainer, TextSubtitle, TextNumber } from './styles';

function collectionImage() {
  if (window.innerWidth > 500) {
    return collectionImgTablet;
  } else {
    return collectionImg;
  }
}
const Collection = () => {
  return (
    <CollectionContainer>
      <ImageModel src={collectionImage()} />
      <TextsContainer>
        <TextNumber>10</TextNumber>
        <TextTitle>October</TextTitle>
        <TextSubtitle>Collection</TextSubtitle>
      </TextsContainer>
    </CollectionContainer>
  );
};

export default Collection;
