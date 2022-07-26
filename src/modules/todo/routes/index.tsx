import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Todo } from './Todo';

export function TodoRoutes() {
  return (
    <Routes>
      <Route path="" element={<Todo />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
