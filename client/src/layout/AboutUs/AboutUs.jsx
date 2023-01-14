import React from 'react';
import {
  AboutUsContainer,
  Logo,
  AboutUsParagraph,
  AboutUsGrid,
  AboutUsGridItem,
} from './styles';
import { Line, Paragraph } from '../../globalStyles';
import logo from '../../assets/logo.png';
import {
  figure1,
  figure2,
  figure3,
  figure4,
  frame,
} from '../../assets/bg-frames/aboutUs';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Logo src={logo} alt='Logo da FAA' />
      <AboutUsParagraph size='md'>
        Making a luxurious lifestyle accessible for a generous group of women is
        our daily drive.
      </AboutUsParagraph>
      <Line />
      <AboutUsGrid>
        <AboutUsGridItem>
          <img src={figure1} />
          <Paragraph style={{ lineHeight: '19px' }} size='md'>
            Fast shipping. Free on orders over $25.
          </Paragraph>
        </AboutUsGridItem>
        <AboutUsGridItem>
          <img src={figure2} />
          <Paragraph style={{ lineHeight: '19px' }} size='md'>
            Sustainable process from start to finish.
          </Paragraph>
        </AboutUsGridItem>
        <AboutUsGridItem>
          <img src={figure3} />
          <Paragraph style={{ lineHeight: '19px' }} size='md'>
            Unique designs and high-quality materials.
          </Paragraph>
        </AboutUsGridItem>
        <AboutUsGridItem>
          <img src={figure4} />
          <Paragraph style={{ lineHeight: '19px' }} size='md'>
            Fast shipping. Free on orders over $25.
          </Paragraph>
        </AboutUsGridItem>
      </AboutUsGrid>
      <img src={frame} style={{ margin: '15px 0' }} />
    </AboutUsContainer>
  );
};

export default AboutUs;
