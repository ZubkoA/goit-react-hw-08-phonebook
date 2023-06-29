import { Layout } from './Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Contacts from 'pages/Contacts';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hook';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(state => state.users.isRefreshing);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contact">
                  <Register />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contact">
                  {' '}
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </ChakraProvider>
  );
};

export default App;
