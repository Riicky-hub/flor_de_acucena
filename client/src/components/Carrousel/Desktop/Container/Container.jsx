import React from 'react';
import { Containers, ImgContainer, TextContainer, TextButton } from './styles';

const Container = ({ title, paragraph, src, bg }) => {
  return (
    <Containers>
      <TextContainer bg={bg}>
        <div>
          <h1>{title}</h1>
          <p>{paragraph}</p>
          <TextButton>Veja mais</TextButton>
        </div>
      </TextContainer>
      <ImgContainer>
        <img src={src} />
      </ImgContainer>
    </Containers>
  );
};

export default Container;
