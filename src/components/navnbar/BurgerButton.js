import styled, { css } from 'styled-components';
import React from 'react';

export const BurgerButton = (props) => {
  const { isOpen, onClick } = props;
  return (
    <Burger active={isOpen} onClick={onClick}>
      <span></span>
    </Burger>
  );
};

const Burger = styled.div`
  position: relative;
  /* margin-left: 160px; */
  width: 30px;
  height: 24px;
  cursor: pointer;
  z-index: 91;
  /* margin-right: ${(props) =>
    props.active ? `${getScrollbarWidth()}px` : '0px'}; */

  & > span {
    position: absolute;
    /* background-color: #fff; */
    background-color: ${({ theme }) => theme.text};
    width: 100%;
    height: 4px;
    left: 0;
    top: 10px;
    transition: all 0.3s ease 0s;
  }

  &:before,
  &:after {
    content: '';
    /* background-color: #fff; */
    background-color: ${({ theme }) => theme.text};
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  // if active props true
  ${(props) =>
    props.active &&
    css`
      &:before {
        transform: rotate(45deg);
        top: 9px;
      }
      &:after {
        transform: rotate(-45deg);
        top: 9px;
      }
      & > span {
        transform: scale(0);
      }
    `}/* } */
`;

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}
