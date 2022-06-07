import React from 'react';
import styled from 'styled-components';
const SvgShapes = () => {
  return (
    <Container>
      <div className="icon heart">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          
          viewBox="-0.5 -0.5 14 14"
          preserveAspectRatio="none"
          >
          <path vectorEffect="non-scaling-stroke"          
            d="M6.555 12.558a.41.41 0 01-.273-.103C6.049 12.255.564 7.501.083 4.57-.133 3.243.071 2.201.69 1.474 1.22.85 2.034.507 2.982.507c.082 0 .165.002.247.008.058-.003.115-.004.172-.004 1.048 0 2.343.461 3.109 2.421C6.94 1.736 7.821.515 9.838.515c1.135 0 2.023.342 2.571.987.597.701.787 1.733.569 3.068-.479 2.929-5.918 7.684-6.149 7.884a.408.408 0 01-.274.104z"
          ></path>
        </svg>
      </div>
      <div className="icon star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="-2 -2 60 60"
          
          preserveAspectRatio="none"
        >
          <path vectorEffect="non-scaling-stroke" d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
        </svg>
      </div>
      <div className="icon moon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        
        viewBox="0 0 512 512"
      >
        <path vectorEffect="non-scaling-stroke" d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z"></path>
      </svg>
      </div>
    
    </Container>
  )
}

export default SvgShapes;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;   
  .icon {
    margin: 50px;
    width: 200px;
    height: 200px;
    
    /* background: red; */
    path {
      fill: transparent;
      stroke-width: 4;
      stroke: #31e8ff
    }
    &.heart path {
      stroke-dasharray: 900;
      stroke-dashoffset: 0;
    }
    &.heart:hover path {
      animation: animate-heart 2s linear forwards;
    }
    @keyframes animate-heart {
      0% {
        stroke-dashoffset: 0;
      }
      40% {
        stroke-dashoffset: 900;
      }
      80% {
        stroke-dashoffset: 1800;
        fill: transparent;
      }
      100% {
        stroke-dashoffset: 1800;
        fill: #31e8ff;
      }
    }
    &.star path {
      stroke-dasharray: 970;
      stroke-dashoffset: 0;
    }
    &.star:hover path {
      animation: animate-star 2s linear forwards;
    }
    @keyframes animate-star {
      0% {
        stroke-dashoffset: 0;
      }
      40% {
        stroke-dashoffset: 970;
      }
      80% {
        stroke-dashoffset: 1940;
        fill: transparent;
      }
      100% {
        stroke-dashoffset: 1940;
        fill: #31e8ff;
      }
    }
    &.moon path {
      stroke-dasharray: 860;
      stroke-dashoffset: 0;
      /* transform: translate(100%); */
      animation: animate-moon linear 4s infinite;
      
    }
    &.moon:hover path {
      animation: animate-moon 2s linear backwards;
    }
    @keyframes animate-moon {
      0% {
        stroke-dashoffset: 0;
      }
      
      100% {
        stroke-dashoffset: 1720;
        /* fill: #31e8ff; */
      }
    }
  }

`;


