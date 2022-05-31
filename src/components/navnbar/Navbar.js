import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../../data/MenuData';
import { Button } from '../butttons/Button';
import { BurgerButton } from './BurgerButton';
import Dropdown from './Dropdown';
import { GlobalStyles } from '../../styles/Globalstyle';
import Sidebar from './SideBar/Sidebar';
import {ReactComponent as Logotype} from '../../assets/svg/logoipsum-logo-7.svg'

const Navbar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <Nav>
      <Sidebar />
      <Container>
        <Logo to="/">
          <Logotype className='logo'/>
        </Logo>
        {/* <MenuBars /> */}
        <GlobalStyles hidden={isOpen} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))
          }
          <NavBtn>
          <Button onClick={toggleTheme} primary="true">
            Toggle theme
          </Button>
        </NavBtn>
        </NavMenu>
        
        <Dropdown isOpen={isOpen} toggle={toggle} />
      </Container>
      {/* <Sidebar /> */}
      <DropdownBurgerButton>
        <BurgerButton isOpen={isOpen} onClick={toggle} />
      </DropdownBurgerButton>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  height: 60px;
  padding: 1rem 2rem;
  z-index: 50;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;
const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 100%;
  @media screen and (max-width: 900px) {
    /* display: none; */
    width: 80%;
    justify-content: center;
  }
`;
const NavLink = css`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  padding-left: 10px;
  /* margin-left: 10px; */
  ${NavLink}
  color: ${({ theme }) => theme.text};
  font-style: italic;
  * {
    fill: ${({ theme }) => theme.text};
  }
`;



const NavMenu = styled.div`
  /* min-width: 600px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const DropdownBurgerButton = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    margin: auto;
    margin-right: 0px;
    display: block;
    /* z-index: 999; */
  }
`;
