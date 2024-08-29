
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./styles/globalStyles";


import routes from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={routes} />

      {/* Otros componentes */}
    </ThemeProvider>
  );
}

export default App;
