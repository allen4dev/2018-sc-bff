import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';

import Pages from './pages';

const App = () => (
  <ThemeProvider theme={theme}>
    <Pages />
  </ThemeProvider>
);

export default App;
