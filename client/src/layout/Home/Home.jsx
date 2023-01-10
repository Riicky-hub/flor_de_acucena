import React from 'react';
import { Paragraph, Title, Container, Button } from '../../globalStyles';

const Home = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet.</Title>
      <Paragraph md>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quos ab,
        quasi aut odio nesciunt placeat accusantium. Rerum, nemo quia?
      </Paragraph>
      <Button transparent border config='1px solid #000'>
        Click here
      </Button>
    </Container>
  );
};

export default Home;
