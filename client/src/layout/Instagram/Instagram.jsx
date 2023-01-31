import React from 'react';
import { InstagramContainer, InstagramTitle, InstagramIcon, InstagramGrid } from './styles';
import { instagramWhite } from '../../assets/icons';
import { InstagramPost } from '../../components';
import { model1, model2, model3, model4 } from '../../assets/models/instagram';

const Instagram = () => {
  return (
    <InstagramContainer>
      <InstagramTitle cap>Follow us</InstagramTitle>
      <InstagramIcon src={instagramWhite} />
      <InstagramGrid>
        <InstagramPost img={model1} user='mia' />
        <InstagramPost img={model2} user='_jihyn' />
        <InstagramPost img={model3} user='mia' />
        <InstagramPost img={model4} user='_jihyn' />
        {(window.innerWidth >= 600) & (window.innerWidth <= 739) ? (
          <>
            <InstagramPost img={model2} user='_jihyn' />
            <InstagramPost img={model3} user='mia' />
          </>
        ) : (
          <></>
        )}
        {window.innerWidth >= 1270 && (
          <>
            <InstagramPost img={model2} user='_jihyn' />
            <InstagramPost img={model3} user='mia' />
          </>
        )}
      </InstagramGrid>
    </InstagramContainer>
  );
};

export default Instagram;
