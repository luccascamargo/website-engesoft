import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
    transition: 1s all;
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
    overflow-x: hidden;
  }

`
