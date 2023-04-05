import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
interface PrivateRouteProps {
  children: any;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { pathname, search, hash } = useLocation();
  const redirectUrl = `${pathname}${search}${hash}`;
  const isAuthenticated = localStorage.getItem('_accesstoken');
  return isAuthenticated ? children : <Navigate to={`/signin?redirect=${encodeURIComponent(redirectUrl)}`} replace />;
};

export default PrivateRoute;
