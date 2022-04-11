import {BrowserRouter} from 'react-router-dom';
import {AppRoutes} from './routes';
import {AuthProvider} from './shared/provider/AuthProvider'
import {ThemeProvider} from '@mui/material';
import {LightTheme} from './shared/themes';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
