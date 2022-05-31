import React, {useState} from 'react';
import { Data } from './data/Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';


const Accordion = ({toggleTheme}) => {
  console.log(toggleTheme);
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if(clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  }

  return (
    <IconContext.Provider value={{color: '#00ffb9', size: '25'}}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return( 
            <div key={index}>
              <Wrap onClick={() => toggle(index)} >
              <h1>{item.question}</h1>
              <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>  
                </Dropdown>
              ) : null}
            </div>
          )})}
        </Container>
      </AccordionSection>

    </IconContext.Provider>
)}

export default Accordion;
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  /* background: #282828; */
`;
const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, .3);

`;
const Wrap = styled.div`
  /* background: #272727; */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100% auto;
  text-align: auto;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;
const Dropdown = styled.div`
  background: rgba(0, 0, 0, 0.3);
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 2rem;
  }

`;