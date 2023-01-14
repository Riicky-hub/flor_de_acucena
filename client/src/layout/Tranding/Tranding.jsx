import React from 'react';
import { Tag } from '../../components';
import { Container } from '../../globalStyles';
import { TrandingTitle, TrandingTags } from './styles';

const Tranding = () => {
  return (
    <Container>
      <TrandingTitle cap>@Trending</TrandingTitle>
      <TrandingTags>
        <Tag>2023</Tag>
        <Tag>spring</Tag>
        <Tag>collection</Tag>
        <Tag>fall</Tag>
        <Tag>dress</Tag>
        <Tag>autumncollection</Tag>
        <Tag>faaclothes</Tag>
      </TrandingTags>
    </Container>
  );
};

export default Tranding;
