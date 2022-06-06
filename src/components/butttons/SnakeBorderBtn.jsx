import React from 'react'
import styled from 'styled-components';

const SnakeBorderBtn = () => {
  return (
    <Button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </Button>
  )
}

export default SnakeBorderBtn
const Button = styled.div`
  position: relative;
  /* top: 50%; */
  /* margin: 0 auto; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  color: #1670f0;
  padding: 15px 30px;
  font-size: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 20px 50px rgba(0,0,0,.5);
  cursor: pointer;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 50%;
    background: rgba(255,255,255, 0.05);
  }
  &:hover{
    transform: translateY(10px);
  }
  span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #0c002b, #1779ff);   
    animation: animate1 linear 2s infinite;
  }
  @keyframes animate1 {
    0%
      {
        transform: translateX(-100%);
      }
    100%
      {
        transform: translateX(100%);
      }
    
  }


  span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #0c002b, #1779ff);   
    animation: animate2 linear 2s infinite;
    animation-delay: 1s;
  }

  @keyframes animate2 {
    0%
      {
        transform: translateY(-100%);
      }
    100%
      {
        transform: translateY(100%);
      }
    
  }

  span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #0c002b, #1779ff);   
    animation: animate3 linear 2s infinite;
  }
  @keyframes animate3 {
    0%
      {
        transform: translateX(100%);
      }
    100%
      {
        transform: translateX(-100%);
      }
    
  }
  span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #0c002b, #1779ff);  
    animation: animate4 linear 2s infinite; 
    animation-delay: 1s;
  }
  @keyframes animate4 {
    0%
      {
        transform: translateY(100%);
      }
    100%
      {
        transform: translateY(-100%);
      }
    
  }
`;