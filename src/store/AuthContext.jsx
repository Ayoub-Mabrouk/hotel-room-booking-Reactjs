import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContext_Component({ children }) {
  const [auth, setAuth] = useState({ loggedIn: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
