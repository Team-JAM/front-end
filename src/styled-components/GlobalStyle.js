import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

html {
  font-size: 62.5%;
}

body {
  line-height: 1.5;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  background-color: #d73729;
}
`;

export default GlobalStyle;
