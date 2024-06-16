import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useCookies } from 'react-cookie';

// Define the shape of the context
interface AuthContextProps {
  isAuthenticated: boolean | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | null>>;
}

// Create the AuthContext with default values
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Define the type for the AuthProvider's children prop
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component to wrap around your app
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [cookies] = useCookies(['t']);

  useEffect(() => {
    // Retrieve the token from cookies or localStorage
    const token = cookies.t || localStorage.getItem('token');

    // Set authentication status based on token presence
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [cookies]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
