import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
  }
  body {
      width: 100%;
      min-height: 100vh;
      position: relative;
      background: #c9b2ba;
      display: flex;
      justify-content: center;
      align-items: center;
  }

`;
export default GlobalStyle;