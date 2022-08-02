import React from 'react';

import { ToastContainer } from 'react-toastify';

import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
