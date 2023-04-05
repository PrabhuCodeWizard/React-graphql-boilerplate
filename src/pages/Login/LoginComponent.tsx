import React from 'react';
import { Link } from 'react-router-dom';

interface LoginComponentProps {
}

export const LoginComponent: React.FC<LoginComponentProps> = () => {
  return (
      <div>
        <h2>Login</h2>
        <Link to='/home'>Home</Link>
      </div>
    );
};
