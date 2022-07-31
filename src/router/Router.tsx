import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '~/components/ProtectedRoute';
import HomePage from '~/pages/Home';
import { lazyImport } from '~/utils/lazyImport';

const { SignupPage } = lazyImport(() => import('~/pages/auth'), 'SignupPage');
const { LoginPage } = lazyImport(() => import('~/pages/auth'), 'LoginPage');
const { TodoRoutes } = lazyImport(() => import('~/pages/todo'), 'TodoRoutes');

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/todo/*"
            element={(
              <TodoRoutes />
          )}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
