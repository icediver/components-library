import React from 'react';
import styled from 'styled-components';
import { menuData } from '../../data/MenuData';
import { Button } from '../butttons';
import { Link } from 'react-router-dom';


const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
     <DropdownWrapper>
       <DropdownNenu>
         {menuData.map((item, index) => (
           <DropdownLink to={item.link} key={index}>
             {item.title}
           </DropdownLink>
         ))}
       </DropdownNenu>
       <BtnWrap>
         <Button primary="true" big="true" to="/contact">
           Contact Us
         </Button>
       </BtnWrap>
     </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown;
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 90;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0px;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
  top:  ${({isOpen}) => (isOpen ? '10' : '-100%')};
`;

const DropdownWrapper = styled.div``;
const DropdownNenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;

`;
