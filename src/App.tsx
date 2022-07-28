import React from 'react';

import { ToastContainer } from 'react-toastify';

import { AppProvider } from './providers/app';
import { Router } from './router';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppProvider>
      <Router />
      <ToastContainer />
    </AppProvider>
  );
}

export default App;
