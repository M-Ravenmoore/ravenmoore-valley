import React from 'react';

import LoginButton from './login-btn';
import LogoutButton from './logout-btn';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthButton;