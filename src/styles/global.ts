import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  body {
    background: linear-gradient(180deg, rgba(1, 1, 9, 0.8) 0%, rgba(1, 1, 9, 0.2) 100%), url('/background.png');
    background-size: cover;
    font-family: 'Maven Pro', sans-serif;
    color: ${(props) => props.theme.white}
  }
  input, textarea, button {
    font-family: 'Maven Pro', sans-serif;
  }
  .container {
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 16px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
