import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              LIBRARY
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks to='/AboutUs' onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              
              <NavItem>
                <NavLinks to='/Contact' onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/SignIn' onClick={closeMobileMenu}>
                  Sign In
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='/SignUp' onClick={closeMobileMenu}>
                  Sign Up
                </NavLinks>
              </NavItem>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
