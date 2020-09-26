import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html,body{
        font-family:'Helvetica Nenu', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiasted;
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        font-size:16px;
        color:#333333;
        margin:0;
    }
`