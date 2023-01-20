import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { RiMenu2Line, RiCloseLine, RiSearch2Line } from 'react-icons/ri';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Logo, Nav, Options, NavbarContainer } from './styles';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const iconStyleProvider = { size: '1.5em', title: 'Menu', color: '14142B' };
  return (
    <NavbarContainer bg='#E6E9EE'>
      <Nav>
        <IconContext.Provider value={iconStyleProvider}>
          <div>
            {toggleMenu ? (
              <RiCloseLine
                style={{ marginRight: '15px' }}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu2Line
                style={{ marginRight: '15px' }}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </IconContext.Provider>
        {toggleMenu && <div>Hello World</div>}
        <Logo>
          <h1>FAA</h1>
          <p>
            <span>--------</span> Clothes
          </p>
        </Logo>
        <Options>
          <IconContext.Provider value={iconStyleProvider}>
            <div>
              <RiSearch2Line style={{ marginRight: '5px' }} />
              <HiOutlineShoppingBag style={{ marginLeft: '5px' }} />
            </div>
          </IconContext.Provider>
        </Options>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
