import React from 'react';
import styled from 'styled-components';

const GlowCards = () => {
  return (
    <Container>
      <div className="box">
        <span> </span>
        <div className="content">
          <h2>Card One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo eum aspernatur, aperiam cum
            quo cumque vero a assumenda impedit voluptate,
            similique accusamus dignissimos nisi sapiente at
            expedita quisquam architecto totam.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="box">
        <span> </span>
        <div className="content">
          <h2>Card Two</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo eum aspernatur, aperiam cum
            quo cumque vero a assumenda impedit voluptate,
            similique accusamus dignissimos nisi sapiente at
            expedita quisquam architecto totam.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="box">
        <span> </span>
        <div className="content">
          <h2>Card Three</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo eum aspernatur, aperiam cum
            quo cumque vero a assumenda impedit voluptate,
            similique accusamus dignissimos nisi sapiente at
            expedita quisquam architecto totam.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      
    </Container>
  );
};

export default GlowCards;

const Container = styled.div`
  font-family: consolas;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  flex-wrap: wrap;
  .box {
    position: relative;
    width: 320px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 30px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      transform: translateY(-20px);
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #ffbc00, #ff0058);
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #ffbc00, #ff0058);
      filter: blur(30px);
    }
    &:nth-child(2):before,
    &:nth-child(2):after {
      background: linear-gradient(315deg, #03a9f4, #ff0058);
    }
    &:nth-child(3):before,
    &:nth-child(3):after {
      background: linear-gradient(315deg, #4dff03, #00d0ff);
    }
    span {
      position: absolute;
      top: 6px;
      left: 6px;
      right: 6px;
      bottom: 6px;
      background: rgba(0, 0, 0, 0.6);
      z-index: 2;
    }
    span:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }
    .content {
      position: relative;
      z-index: 10;
      padding: 20px 40px;
      h2 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        margin-bottom: 10px;
        line-height: 18px;
      }
      a {
        display: inline-block;
        font-size: 20px;
        color: #111;
        background: #fff;
        padding: 10px;
        text-decoration: none;
        font-weight: 700;

      }
    }
  }
`;
