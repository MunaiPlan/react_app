import React from 'react';

import { CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRoutes } from './routes';
import { persistor, store } from './store';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <AppRoutes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
