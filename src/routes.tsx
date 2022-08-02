import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '~/components/ProtectedRoute';
import { AuthRoutes } from '~/pages/auth';
import { MiscRoutes } from '~/pages/misc';
import { TodoRoutes } from '~/pages/todo';

export function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        {MiscRoutes}
        {AuthRoutes}
        <Route path="/todo/*" element={<ProtectedRoute />}>
          {TodoRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
