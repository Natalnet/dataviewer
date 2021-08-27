import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Rotas from './routes';

// Tema Base para todo o projeto
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#EFEFEF',
        },
      },
    },
  },
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Rotas />
    </ThemeProvider>
  );
};

export default App;
