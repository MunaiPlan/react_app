import React from 'react';

import { Route } from 'react-router-dom';

import HomePage from './Home';

export const MiscRoutes = [
  <Route path="/" element={<HomePage />} key="home" />,
];
