import React from 'react';
import styled from 'styled-components';

const ToggleBtn = () => {
  const [active, setActive] = React.useState(false)
  return (
    <Button onClick={() => setActive(!active)} className={active ? 'active' : ''}>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  );
};

export default ToggleBtn;

const Button = styled.div`
  margin: 50px;
  position: relative;
  width: 70px;
  height: 70px;
  background: #fff;
  box-shadow: inset 0 10px 20px rgba(0,0,0,0.08);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transform: scale(0.5);
  span {
    position: absolute;
    width: 40px;
    height: 6px;
    background: #1863ff;
    border-radius: 4px;
    transition: 0.5s;
    &:nth-child(1) {
      transform: translateY(-15px);
      width: 25px;
      left: 15px;
    }
    &:nth-child(2) {
      transform: translateY(15px);
      width: 15px;
      left: 15px;
    }
  }
  &.active {
    span {
      &:nth-child(3) {
      transform: translateX(60px);
      
    }
      &:nth-child(1) {
      width: 40px;
      transform: translateX(0px) rotate(45deg);
      transition-delay: 0.125s;    
    }
      &:nth-child(2) {
      width: 40px;
      transform: translateX(0px) rotate(-45deg);
      transition-delay: 0.25s; 
    }
    }
  }
`;
