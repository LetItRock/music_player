import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none;
  }

  audio,
  canvas,
  video {
    display: inline-block;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #f7f8fa;
    color: #21325d;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
