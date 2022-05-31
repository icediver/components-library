import React from 'react'
// import { func, string } from 'prop-types';
import styled from "styled-components"


const Toggle = ({theme,  toggleTheme }) => {
    return (
      <Button onClick={toggleTheme}>
        
      </Button>
    );
};

// Toggle.propTypes = {
//     theme: string.isRequired,
//     toggleTheme: func.isRequired,
// }
  const Button = styled.button`    
    /* border: 2px solid ${({ theme }) => theme.toggleBorder}; */
    /* background: rgb(2,0,36); */
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.8) 45%, rgba(0,212,255,1) 100%);
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.5rem;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 10px;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 4rem;
    height: 2rem;
    outline: none;
  `;
export default Toggle;

