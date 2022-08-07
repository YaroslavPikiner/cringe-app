import { Navigate } from 'react-router-dom';
import React from 'react';

import { useAuth } from '../../hooks/useAuth/useAuth';
import routes from '../../routes';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const PrivateRoute = ({ children }: Props) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={routes.signIn} replace />;
  }

  return children;
};
export default PrivateRoute;
