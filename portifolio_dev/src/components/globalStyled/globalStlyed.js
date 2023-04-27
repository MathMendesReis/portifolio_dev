import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: helvetica;
    ::-webkit-scrollbar {
        display: none;

  }
  /* ::-webkit-scrollbar-track {
    background-color: black;
    border-radius: 8px;
  } */
  /* ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 8px;
  } */
}
body{
  height: auto;
}
`
