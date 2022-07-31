import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { TodoPage } from './Todo';

export function TodoRoutes() {
  return (
    <Routes>
      <Route path="" element={<TodoPage />} />
    </Routes>
  );
}
