import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '~/hooks/useAuth';

type Props = {
  redirectPath?: string;
  children?: React.ReactElement;
};

export function ProtectedRoute({
  redirectPath = '/login',
  children,
}: Props) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
}
