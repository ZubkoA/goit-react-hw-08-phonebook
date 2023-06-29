import { useAuth } from './hook/index';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
