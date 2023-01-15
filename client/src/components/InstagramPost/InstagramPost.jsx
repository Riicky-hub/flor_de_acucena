import React from 'react';
import { PostContainer } from './styles';

const InstagramPost = ({ img, user }) => {
  return (
    <PostContainer>
      <img src={img} />
      <p>@{user}</p>
    </PostContainer>
  );
};

export default InstagramPost;
