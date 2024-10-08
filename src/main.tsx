import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/material';
import { CustomThemeProvider } from './theme/CustomThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>
);
