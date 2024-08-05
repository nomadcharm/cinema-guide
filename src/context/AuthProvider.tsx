import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { fetchCurrentUser } from "../api/UserApi";
import { UserOnAuth } from "../models/UserSchemas";
import AuthModal from "../components/AuthModal/AuthModal";

interface AuthContextProps {
  currentUser: UserOnAuth | null;
  getCurrentUser: () => void;
  clearCurrentUser: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null, getCurrentUser: () => {}, clearCurrentUser: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserOnAuth | null>(null);

  const getCurrentUser = useCallback(async (): Promise<void> => {
    const user: UserOnAuth = await fetchCurrentUser();
    setCurrentUser(user);
  }, []);

  const clearCurrentUser = () => {
    setCurrentUser(null);
  };

  useEffect( () => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, getCurrentUser, clearCurrentUser }}>
      {/* <AuthModal /> */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;