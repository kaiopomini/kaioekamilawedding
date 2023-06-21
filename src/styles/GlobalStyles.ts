import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }

  html {
    scroll-behavior: smooth;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: transparent; 
}
 
*::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 8px;
}

*:hover::-webkit-scrollbar-thumb {
  background: #cfcfcf; 
}

`;
