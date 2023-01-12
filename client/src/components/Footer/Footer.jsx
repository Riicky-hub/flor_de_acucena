import React from 'react';
import { Link } from 'react-router-dom';
import {
  Div,
  Icon,
  ContainerFooter,
  Text,
  ButtonsDiv,
  FooterDiv,
} from './styles';
import { Line, Button } from '../../globalStyles';
import { instagram, twitter, youtube } from '../../assets/icons';

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Div>
          <Link>
            <Icon src={twitter} />
          </Link>
          <Link>
            <Icon src={instagram} />
          </Link>
          <Link>
            <Icon src={youtube} />
          </Link>
        </Div>
        <Line />
        <Div>
          <Text>support@openui.design</Text>
          <Text>+60 825 876</Text>
          <Text>08:00 - 22:00 - Everyday</Text>
        </Div>
        <Line />
        <ButtonsDiv>
          <Button transparent>About</Button>
          <Button transparent>Contact</Button>
          <Button transparent>Blog</Button>
        </ButtonsDiv>
      </ContainerFooter>
      <FooterDiv>
        <Text>Copyright&copy; OpenUI All Rights Reserved.</Text>
      </FooterDiv>
    </>
  );
};

export default Footer;
