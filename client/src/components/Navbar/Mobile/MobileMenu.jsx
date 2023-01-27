import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { RiMenu2Line, RiCloseLine, RiInstagramFill } from 'react-icons/ri';
import { BsTelephone, BsTwitter, BsYoutube } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import {
  MenuContainer,
  LinksContainer,
  MenuLink,
  ContactContainer,
  ContactItem,
  SocialContainer,
  SocialMedia,
} from './styles';
import { Line } from '../../../globalStyles';

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = toggleMenu ? 'hidden' : 'auto';
  }, [toggleMenu]);
  const iconStyleProvider = { size: '1.5em', title: 'Menu', color: '14142B' };
  return (
    <IconContext.Provider value={iconStyleProvider}>
      <div>
        {toggleMenu ? (
          <MenuContainer>
            <RiCloseLine style={{ margin: '27px 0 5px 0', zIndex: '10' }} onClick={() => setToggleMenu(false)} />
            <LinksContainer>
              <MenuLink to='/clothes'>Apparel</MenuLink>
              <MenuLink to='/clothes'>Bag</MenuLink>
              <MenuLink to='/clothes'>Shoes</MenuLink>
              <MenuLink to='/clothes'>Accessories</MenuLink>
              <MenuLink to='/clothes'>Craft Supplies</MenuLink>
              <MenuLink to='/clothes'>Tools</MenuLink>
              <MenuLink to='/clothes'>Art</MenuLink>
            </LinksContainer>
            <ContactContainer>
              <ContactItem>
                <BsTelephone style={{ marginRight: '10px' }} /> (786) 713-8616
              </ContactItem>
              <ContactItem>
                <SlLocationPin style={{ marginRight: '10px' }} /> Your location
              </ContactItem>
            </ContactContainer>
            <SocialMedia>
              <Line />
              <SocialContainer>
                <RiInstagramFill />
                <BsTwitter style={{ margin: '0 40px' }} />
                <BsYoutube />
              </SocialContainer>
            </SocialMedia>
          </MenuContainer>
        ) : (
          <RiMenu2Line style={{ marginRight: '15px' }} onClick={() => setToggleMenu(true)} />
        )}
      </div>
    </IconContext.Provider>
  );
};

export default MobileMenu;
