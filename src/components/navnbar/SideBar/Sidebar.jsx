import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { BurgerButton } from '../BurgerButton';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    setOpen(false)
  });
  
  return (
    <>
      <LeftBurgerButton>
        <BurgerButton className="hhh" isOpen={open} onClick={() => {
        setOpen(!open)        
        }}/>
      </LeftBurgerButton>
      
      <SidebarNav sidebar={open} ref={ref}>
        <SidebarWrap >
          {SidebarData.map((item, index) => {
            return <SubMenu sidebar={open} item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
// Hook


const SidebarNav = styled.nav`
  /* margin-top: 60px; */
  padding-top: 60px;
  background: #15171c;
 
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  opacity: ${({ sidebar }) => (sidebar ? '0.9' : '1')};
  transition: 550ms ease-out;
  z-index: 9;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
const LeftBurgerButton = styled.div`
  
`;
