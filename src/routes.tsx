import React from 'react';

import {
  BrowserRouter, Route, Navigate, Routes,
} from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './modules/auth';
import { lazyImport } from './utils/lazyImport';

const { TodoRoutes } = lazyImport(() => import('~/modules/todo'), 'TodoRoutes');
const { Signup } = lazyImport(() => import('~/modules/auth'), 'Signup');

export function AppRoutes() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p> Loading...</p>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/todo"
            element={(
              <ProtectedRoute>
                <TodoRoutes />
              </ProtectedRoute>
          )}
          />
          <Route path="/*" element={<Navigate to="/todo" replace />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
