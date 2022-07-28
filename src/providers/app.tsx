import * as React from 'react';

import { Button, CircularProgress } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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
              {children}
            </PersistGate>
          </Provider>

        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
