import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
      box-sizing: border-box;
    }
    body {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.color};
      margin: 0;
      font-family: 'Roboto', 'sans-serif'
    }
`;
