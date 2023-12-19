import { Route, Routes } from 'react-router-dom';

import Contacts from 'pages/Contacts';

import HomePage from 'pages/HomePage';
import { AppLayout } from './appLayout/AppLayout';
import { RestrictedRoute } from './RestrictedRoute';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/tasks"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
