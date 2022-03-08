// import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import List from '../List';
import { Container, Lists } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        Header
        Destaque
        <Lists>
          <List />
        </Lists>
        Rodapé
      </Container>
    </ThemeProvider>
  );
}

export default App;
