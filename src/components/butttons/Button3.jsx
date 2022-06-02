import React from 'react';
import styled from 'styled-components';

const Button3 = () => {
  return (
    <>
      <Container>
        <GlowBtn>
          <span>Button</span>
        </GlowBtn>     
        <GlowBtn>
          <span>Button</span>
        </GlowBtn>
      </Container>
    </>
  );
};

export default Button3;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GlowBtn = styled.div`
  
    position: relative;
    width: 180px;
    height: 60px;
    display: inline-block;
    background: #fff;
    margin: 20px;
    user-select: none;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: #f00;
      transition: 0.5s;
    }

    &:before,
    &:after {
      background: linear-gradient(
        45deg,
        #00ccff,
        #0e1538,
        #d400d4
      );
    }
    &:nth-child(2):before,
    &:nth-child(2):after {
    background: linear-gradient(
      45deg,
      #ff075b,
      #0e1538,
      #0e1538,
      #1aff22
      );
    }

    &:hover:before {
      inset: -1px;
    }
    &:hover:after {
      inset: -1px;
      filter: blur(10px);
    }
    & span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      background: #1F2833;
      /* background: #0e1538; */
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
      border: 1px solid #040a29;
      overflow: hidden;
    }
    & span:before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255, 0.02);
      transform: skew(25deg);
    }
`;
