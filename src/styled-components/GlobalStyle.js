import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

button {
  cursor: pointer;
  background-color: #fdf5ea;
  font-family: inherit;
  border: 2px solid #eb847d;
  border-radius: 0.5rem;
  box-shadow: 0 4px 0 1px #eb847d;
  padding: 0.1rem 0.4rem;
  margin: 0.2rem 0.3rem;
}

button:focus {
  outline: 0;
}

a {
  text-decoration: none;
  color: white;
}
`;

export default GlobalStyle;
