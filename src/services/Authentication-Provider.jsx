import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [user, setUser] = useState();

  const signInRequest = (email, password) => {
    console.log(email, password);
  };

  const contextValue = useMemo(() => ({ isAuthenticated: !!user, signInRequest }), [user]);

  return (
    <AuthenticationContext.Provider value={contextValue}>{children}</AuthenticationContext.Provider>
  );
}

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
