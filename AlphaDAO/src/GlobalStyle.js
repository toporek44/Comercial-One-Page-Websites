import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*, *::before, *::after{
    box-sizing:border-box;
}

html{
font-size:62.5%;


}

body{
    margin:0;
    padding: 0;
    font-family:'Staatliches', sans-serif;
    font-size: 1.6rem;
   
    width:100%;
    height: 100%;
    position:relative;
}


`;

export default GlobalStyle;
