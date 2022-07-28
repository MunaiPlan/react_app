import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '~/components/ProtectedRoute';
import { lazyImport } from '~/utils/lazyImport';

const { SignupPage } = lazyImport(() => import('~/pages/auth'), 'SignupPage');
const { LoginPage } = lazyImport(() => import('~/pages/auth'), 'LoginPage');
const { TodoPage } = lazyImport(() => import('~/pages/todo'), 'TodoPage');

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todo/*" element={<ProtectedRoute />}>
          <Route path="" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
