import React from 'react'
import styled from 'styled-components';
const SvgAnimation = () => {
  return (
    <StrokeAnimation>
      <svg><rect></rect></svg>
      <div className="content">
        <h1>Svg Stroke Animation Effects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas tempora minima sequi? Earum possimus nulla minus odit ratione culpa voluptatibus! Cumque quos, aperiam nemo fugit similique velit officiis fugiat!</p>
      </div>
    </StrokeAnimation>
  )
}

export default SvgAnimation

const StrokeAnimation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: #001e2d;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  border:  2px solid rgba(0,0,0,0.5);
  .content {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border:  2px solid #ffeb3b;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    text-align: center;
    h1 {
      color: #fff;
      font-size: 30px;
      margin: 0 0 10px;
      padding: 0;
    }
    p {
      color: #fff;
    }
  }
  svg, svg rect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: transparent;
  }
  svg  {
    rect {
      stroke: #0093ff;
      stroke-width: 4;
      stroke-dasharray: 400;
      animation: animate 3s linear infinite;
    }
    @keyframes animate {
      0% {
        stroke-dashoffset: 800;
      }
      100% {
        stroke-dashoffset: 0;
      }
      
    }
  }
`;