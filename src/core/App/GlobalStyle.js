import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }
  *, ::before, ::after {
  box-sizing: inherit;
  }
  
  body {
    color: ${({ theme }) => theme.colors.site.text};
    background: ${({ theme }) => theme.colors.site.background};
    word-break:break-word;
    overflow-y:scroll;
    font-size:18px;
    letter-spacing:0.05em;
    font-family: 'Inter', sans-serif;
  }
`;
