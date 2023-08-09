import {
  createGlobalStyle,
} from 'styled-components'



const GlobalStyles = createGlobalStyle`

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --color: white;
    --color-alt: #ffb400;
    --bg-color: #111111;
    --bg-color-alt: #222222;
    --fs-sm: 2.22vh;
    --fs-med: 3.33vh;
    --fs-lge: 4.44vh;
  }

  body,
  html {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    min-width: 33vw;
    min-height: 100vh;
    color: var(--color);
    background: var(--bg-color);
    font-weight: 700;
    overflow: hidden;
  }
`
export default GlobalStyles
