import { FC } from 'react';
import { Navigate } from 'react-router-dom';
interface PublicRouteProps {
  children: any;
}

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('_accesstoken');
  return isAuthenticated ? <Navigate to="/workspace" replace /> : children;
};

export default PublicRoute;
