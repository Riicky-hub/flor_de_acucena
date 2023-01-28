import React from 'react';
import { IconContext } from 'react-icons';
import { RiSearch2Line } from 'react-icons/ri';
import { HiOutlineShoppingBag, HiUserCircle } from 'react-icons/hi';
import { Logo, Nav, Options, NavbarContainer, NavLink, Links, LinksContainer } from './styles';
import MobileMenu from './Mobile/MobileMenu';
import LogoFrame from '../../assets/bg-frames/LogoFrame.svg';
import LogoFrameWhite from '../../assets/bg-frames/LogoFrameWhite.svg';

const Navbar = ({ bg }) => {
  return (
    <NavbarContainer bg={bg}>
      <Nav>
        {window.innerWidth >= 930 ? (
          <IconContext.Provider
            value={
              window.innerWidth < 930
                ? { size: '1.5em', title: 'Menu', color: '14142B' }
                : { size: '1.5em', title: 'Menu', color: 'FFFFFF' }
            }
          >
            <NavLink to='/user'>
              <HiUserCircle style={{ marginRight: '5px' }} />
              {window.innerWidth >= 1024 && <p>Usuario</p>}
            </NavLink>
          </IconContext.Provider>
        ) : (
          <MobileMenu />
        )}
        <div style={{ display: 'flex' }}>
          {window.innerWidth >= 930 ? <img src={LogoFrameWhite} /> : <img src={LogoFrame} />}
          <Logo>
            <h1>FAA</h1>
            <p>
              <span>--------</span> Clothes
            </p>
          </Logo>
          {window.innerWidth >= 930 ? <img src={LogoFrameWhite} /> : <img src={LogoFrame} />}
        </div>
        <Options>
          <IconContext.Provider
            value={
              window.innerWidth < 930
                ? { size: '1.5em', title: 'Menu', color: '14142B' }
                : { size: '1.5em', title: 'Menu', color: 'FFFFFF' }
            }
          >
            <Links>
              <NavLink to='/search'>
                <RiSearch2Line style={{ marginRight: '5px' }} />
                {window.innerWidth >= 1275 && <p>Pesquisar</p>}
              </NavLink>
              <NavLink to='/checkout'>
                <HiOutlineShoppingBag style={{ marginRight: '5px' }} />
                {window.innerWidth >= 1275 && <p>Carrinho</p>}
              </NavLink>
            </Links>
          </IconContext.Provider>
        </Options>
      </Nav>
      {window.innerWidth >= 930 && (
        <LinksContainer>
          <Links style={{ justifyContent: 'space-between', width: '85%', maxWidth: '1300px' }}>
            <NavLink to='/clothes'>Apparel</NavLink>
            <NavLink to='/clothes'>Bag</NavLink>
            <NavLink to='/clothes'>Shoes</NavLink>
            <NavLink to='/clothes'>Accessories</NavLink>
            <NavLink to='/clothes'>Craft Supplies</NavLink>
            <NavLink to='/clothes'>Tools</NavLink>
            <NavLink to='/clothes'>Art</NavLink>
          </Links>
        </LinksContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
