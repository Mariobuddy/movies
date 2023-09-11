import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --bg:#04152d;
  --dim1:#ddd6d6;
  --wcol:#FFFFFF;
}

body{
  background-color:#04152d;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none;

/* 
font-family: 'Alkatra', cursive;
font-family: 'Allura', cursive;
font-family: 'Clicker Script', cursive;
font-family: 'Great Vibes', cursive;
font-family: 'Lato', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Rouge Script', cursive; */
}

html {
  font-size: 62.5%;
}

`;
