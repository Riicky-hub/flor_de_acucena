import React from 'react';
import { TagButton } from './styles';

const Tag = (props) => {
  return <TagButton>#{props.children}</TagButton>;
};

export default Tag;
