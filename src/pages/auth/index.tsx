import React from 'react';

import { Route } from 'react-router-dom';

import { lazyImport } from '~/utils/lazyImport';

const { LoginPage } = lazyImport(() => import('./Login'), 'LoginPage');
const { SignupPage } = lazyImport(() => import('./Signup'), 'SignupPage');

export const AuthRoutes = [
  <Route path="/login" element={<LoginPage />} key="login" />,
  <Route path="/signup" element={<SignupPage />} key="signup" />,
];
