import React from 'react';
import { Collection, Carrousel } from '../../components';
import { CollectionsContainer } from './styles';

const Collections = () => {
  return (
    <CollectionsContainer>
      <Collection />
      <Carrousel />
    </CollectionsContainer>
  );
};

export default Collections;
