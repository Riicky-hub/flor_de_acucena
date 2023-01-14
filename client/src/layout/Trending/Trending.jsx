import React from 'react';
import { Tag } from '../../components';
import { TrendingContainer, TrendingTitle, TrendingTags } from './styles';

const Trending = () => {
  return (
    <TrendingContainer>
      <TrendingTitle cap>@Trending</TrendingTitle>
      <TrendingTags>
        <Tag>2023</Tag>
        <Tag>spring</Tag>
        <Tag>collection</Tag>
        <Tag>fall</Tag>
        <Tag>dress</Tag>
        <Tag>autumncollection</Tag>
        <Tag>faaclothes</Tag>
      </TrendingTags>
    </TrendingContainer>
  );
};

export default Trending;
