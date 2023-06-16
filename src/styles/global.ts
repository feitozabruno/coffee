import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]};
    /* box-shadow: none; */
  }

  body {
    background: ${(props) => props.theme["background"]};
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    overflow: scroll;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  button {
    background: none;
    border: none;
  }
`;
