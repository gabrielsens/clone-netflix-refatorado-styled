// import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Home from '../../Pages/Home';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
