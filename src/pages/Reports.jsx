import React from 'react';
import Button3 from '../components/butttons/Button3';
import GlowCards from '../components/cards/neon/GlowCards';
import styled from 'styled-components';
import PriceCard from '../components/price/PriceCard';
import TestimonialsSwiper from '../components/testimonials/TestimonialsSwiper';
import SvgAnimation from '../components/cards/neon/svgAnimation/SvgAnimation';
import SnakeBorderBtn from '../components/butttons/SnakeBorderBtn';
import ToggleBtn from '../components/butttons/ToggleBtn';
import SvgShapes from '../components/butttons/svgShapes/SvgShapes';
import DropdownMenu from '../components/menus/DropdownMenu';

export const Reports = () => {
  return (
    <div className='reports'>
      <h1>Reports</h1>
    </div>
  )
};
export const ReportsOne = () => {
  return (
    <>
    <Container>      
      <Button3/>
    </Container>
    <BtnContainer>      
      <SnakeBorderBtn/>
      <ToggleBtn/>
    </BtnContainer>
    <SvgContainer>      
      <SvgShapes/>
      
    </SvgContainer>
    </>
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
      <Container>
      <SvgAnimation />
    </Container>
    </>
  )
};
export const ReportsThree = () => {
  return (
    <>
      <ContainerDropdownMenu>
        <DropdownMenu/>
      </ContainerDropdownMenu>
    </>
  )
};

const Container = styled.section`
  position: relative;
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
const BtnContainer = styled(Container)`
  background: #0c002b;
`;
const SvgContainer = styled(Container)`
  background: #06181f;
`;
const ContainerDropdownMenu = styled(Container)`
  background: linear-gradient(45deg, #4e65ff, #92effd);
`;

