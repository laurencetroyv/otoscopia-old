import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [user, setUser] = useState();

  const contextValue = useMemo(() => ({ isAuthenticated: !!user }), [user]);

  return (
    <AuthenticationContext.Provider value={contextValue}>{children}</AuthenticationContext.Provider>
  );
}

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
