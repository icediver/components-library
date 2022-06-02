import React from 'react';
import styled from 'styled-components';


const CheckBox1 = ({toggleTheme, checked}) => {
  return (
    <CheckBox>
      <input type="checkbox" checked={checked} onChange={toggleTheme}/>
      <span></span>
    </CheckBox>
  )
}

export default CheckBox1;
const CheckBox = styled.label`
  input[type="checkbox"] {
    -webkit-appearance: none;
    visibility: hidden;
    display: none;
  }
  span {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    background: #092c3e;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    transition: ease-in 0.5s;
    &:before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      /* background: #fff; */
      background: ${({theme}) => theme.text};
      width: 15px;
      height: 15px;
      border-radius: 50%;
      transition: 0.5s;
    }
    &:after {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      background: #1F2833;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      transition: 0.5s;
      transform: translateX(50px);
    }
  }
  input[type="checkbox"]:checked ~ span {
    background: #fff;
    /* box-shadow: 0 0 0 100vw; */
  }
  input[type="checkbox"]:checked ~ span:before {
    transform: translateX(-50px);
  }
  input[type="checkbox"]:checked ~ span:after {
    transform: translateX(0px);
  }
`;