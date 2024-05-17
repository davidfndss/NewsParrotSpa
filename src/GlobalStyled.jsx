import { createGlobalStyle } from "styled-components"

const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial;
  }

  body {
    background-color: #f1f1f1;
  }
`
export { GlobalStyled }