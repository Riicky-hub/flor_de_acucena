import React from 'react';
import { menu, search, shoppingBag } from '../../assets/icons';
import { Logo, Nav, Icon, Options, NavbarContainer } from './styles';

const Navbar = () => {
  return (
    <NavbarContainer bg='#E6E9EE'>
      <Nav>
        <Icon src={menu} mr='15px' />
        <Logo>
          <h1>FAA</h1>
          <p>
            <span>--------</span> Clothes
          </p>
        </Logo>
        <Options>
          <Icon src={search} mr='5px' />
          <Icon src={shoppingBag} ml='5px' />
        </Options>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
