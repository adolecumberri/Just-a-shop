import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./styles/globalStyles";
import { BrowserRouter as Router } from 'react-router-dom';


import ResponsiveAppBar from './components/ResponsiveAppBar';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <ResponsiveAppBar />
        <AppRoutes />
      {/* Otros componentes */}
    </ThemeProvider>
  );
}

export default App;
