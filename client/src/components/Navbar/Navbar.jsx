import React from 'react';
import { IconContext } from 'react-icons';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Logo, Nav, Options, NavbarContainer } from './styles';
import MobileMenu from './Mobile/MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const iconStyleProvider = { size: '1.5em', title: 'Menu', color: '14142B' };
  return (
    <NavbarContainer bg='#E6E9EE'>
      <Nav>
        <MobileMenu />
        <Logo>
          <h1>FAA</h1>
          <p>
            <span>--------</span> Clothes
          </p>
        </Logo>
        <Options>
          <IconContext.Provider value={iconStyleProvider}>
            <div>
              <Link to='/search'>
                <RiSearch2Line style={{ marginRight: '5px' }} />
              </Link>
              <Link to='/checkout'>
                <HiOutlineShoppingBag style={{ marginLeft: '5px' }} />
              </Link>
            </div>
          </IconContext.Provider>
        </Options>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
