import * as React from 'react';

import {
  Button,
  CircularProgress,
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';
// import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useDarkMode } from 'usehooks-ts';

import { store, persistor } from '~/store';

function ErrorFallback() {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
}

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppThemeProvider({ children }: AppProviderProps) {
  const { isDarkMode } = useDarkMode();
  const theme = createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } });

  return (
    // Make sure the Material stylesheet is placed above your own
    // styles so you can overwrite them
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </StyledThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense
      fallback={(
        <div className="flex items-center justify-center w-screen h-screen">
          <CircularProgress />
        </div>
      )}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <PersistGate loading={<CircularProgress />} persistor={persistor}>
              <AppThemeProvider>{children}</AppThemeProvider>
            </PersistGate>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
