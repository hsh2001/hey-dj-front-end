import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html,
body,
p {
  display: block;
  padding: 0;
  margin: 0;
  font-family: 'SUIT', sans-serif;
}

img,
canvas,
iframe {
  width: 100%;
  display: block;
}
`;
