import React, { Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, Navigate } from 'react-router-dom';

import routes from '../routes';
import Status404 from '../components/Status404/Status404';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

const Router = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Box sx={{ display: 'flex' }}>
        <Routes>
          <Route path={routes.home} element={<Navigate to={routes.signIn} />} />
          <Route path={routes.signIn} element={<SignIn />} />
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.forgotPassword} element={<>forgotPassword</>} />
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route element={<Status404 />} />
        </Routes>
      </Box>
    </Suspense>
  );
};

export default Router;
