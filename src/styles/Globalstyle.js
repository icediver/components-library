import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  html, body {
    overflow-x: hidden;
    overflow: ${props => props.hidden && 'hidden'};
    
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s ease-in;
  }
  .home,
  .reports,
  .products,
  .overview,
  .team {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }

  `