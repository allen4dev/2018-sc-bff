import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';

import Dummie from './nested/structure/Dummie';

const App = () => (
  <ThemeProvider theme={theme}>
    <Dummie />
  </ThemeProvider>
);

export default App;
