import React from 'react';
import { theme } from './lib/theme';
import { ThemeProvider } from '@material-ui/core';
import { AppBar } from './components/AppBar';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
    </ThemeProvider>
  )
}

export default App;