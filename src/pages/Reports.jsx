import React from 'react';
import Button3 from '../components/butttons/Button3';
import GlowCards from '../components/cards/neon/GlowCards';
import styled from 'styled-components';
import PriceCard from '../components/price/PriceCard';
import TestimonialsSwiper from '../components/testimonials/TestimonialsSwiper';

export const Reports = () => {
  return (
    <div className='reports'>
      <h1>Reports</h1>
    </div>
  )
};
export const ReportsOne = () => {
  return (
    <div className='reports'>
      
      <Button3/>
    </div>
  )
};
export const ReportsTwo = () => {
  return (
    <>
    <Container>
      <GlowCards/>
    </Container>
      <PriceContainer>
        <PriceCard/>
      </PriceContainer>
      <Container>
      <TestimonialsSwiper/>
    </Container>
    </>
  )
};
export const ReportsThree = () => {
  return (
    <div className='reports'>
      <h1>Reports/reports3</h1>
    </div>
  )
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: #323232; */
  background: ${({ theme }) => theme.body};
`;
const PriceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #323232;
`;

