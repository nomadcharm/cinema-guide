import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchCurrentUser } from "../api/UserApi";
import { UserOnAuth } from "../models/UserSchemas";

interface AuthContextProps {
  currentUser: UserOnAuth | null;
}

export const AuthContext = createContext<AuthContextProps>({ currentUser: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserOnAuth | null>(null);

  const getCurrentUser = async () => {
    const user: UserOnAuth = await fetchCurrentUser();
    setCurrentUser(user);
  };
  
  useEffect( () => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
