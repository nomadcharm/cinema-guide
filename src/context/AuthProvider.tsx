import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchCurrentUser } from "../api/UserApi";
import { UserOnAuth } from "../models/UserSchemas";

interface AuthContextProps {
  currentUser: UserOnAuth | null;
  getCurrentUser: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null, getCurrentUser: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserOnAuth | null>(null);

  const getCurrentUser = async (): Promise<void> => {
    const user: UserOnAuth = await fetchCurrentUser();
    setCurrentUser(user);
  };
  
  useEffect( () => {
    getCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

