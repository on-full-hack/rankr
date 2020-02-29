import React from 'react';
import { theme } from './lib/theme';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { Home } from './components/Home';
import { Leagues } from './components/Leagues';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/">
          <AppBar />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/leagues">
          <Leagues />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
