import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { TodoPage } = lazyImport(() => import('./Todo'), 'TodoPage');

export const TodoRoutes = [
  <Route path="" element={<TodoPage />} key="todo" />,
];
