import React from 'react';
import { Paragraph, Title, Container, Button } from '../../globalStyles';
import shopping from '../../assets/icons/heart.svg';

const Hero = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet.</Title>
      <Paragraph md>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quos ab,
        quasi aut odio nesciunt placeat accusantium. Rerum, nemo quia?
      </Paragraph>
      <Button>
        Click here
        <img src={shopping} />
      </Button>
    </Container>
  );
};

export default Hero;
