import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CheckBox2 = ({ toggleTheme }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    toggleTheme();
  }, [active]);
  return (
    <CheckBox
      className={active ? 'active' : ''}
      onClick={() => setActive(!active)}>
      <i></i>
      {/* <input type="checkbox" checked={checked} onChange={toggleTheme}/>
      <span></span> */}
    </CheckBox>
  );
};

export default CheckBox2;
const CheckBox = styled.div`
  top: 0px;
  position: relative;
  display: block;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  /* background: #222; */
  background: #1f2833;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: inset 0 8px 60px rgba(0, 0, 0, 0.1),
    inset 0 8px 8px rgba(0, 0, 0, 0.1),
    inset 0 -4px 4px rgba(0, 0, 0, 0.1);
  i {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: linear-gradient(
      to bottom,
      #2c3949,
      #1f2833
    );
    border-radius: 50%;
    transform: scale(0.85);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5),
      inset 0 1px 1px rgba(255, 255, 255, 0.2),
      inset 0 -1px 1px rgba(255, 255, 255, 0.2);
    transition: 0.5s;
  }
  &.active {
    background: #fff;
    box-shadow: inset 0 1px 15px rgba(0, 0, 0, 0.1),
      inset 0 1px 6px rgba(0, 0, 0, 1),
      inset 0 -1px 1px rgba(0, 0, 0, 0.8);
    i {
      left: 30px;
      background: linear-gradient(
        to bottom,
        #eaeaea,
        #f9f9f9
      );
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7),
        inset 1px 1px 2px rgba(255, 255, 255, 0.5),
        /* -1px 1px 20px rgba(0, 0, 0, 0.5), */ inset 2px
          2px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;
