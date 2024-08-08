import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { fetchCurrentUser } from "../api/UserApi";
import { UserOnAuth } from "../models/UserSchemas";
import AuthModal from "../components/AuthModal/AuthModal";

interface AuthContextProps {
  authMode: string,
  setAuthMode: React.Dispatch<React.SetStateAction<string>>,
  currentUser: UserOnAuth | null;
  getCurrentUser: () => void;
  clearCurrentUser: () => void;
  handleAuthModalCall: () => void;
  handleClick: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  authMode: "login",
  setAuthMode: () => { },
  currentUser: null,
  getCurrentUser: () => { },
  clearCurrentUser: () => { },
  handleAuthModalCall: () => { },
  handleClick: () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<UserOnAuth | null>(null);
  const [authMode, setAuthMode] = useState<string>("login");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getCurrentUser = useCallback(async (): Promise<void> => {
    const user: UserOnAuth = await fetchCurrentUser();
    setCurrentUser(user);
  }, []);

  const clearCurrentUser = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const handleAuthModalCall = () => {
    setIsModalOpen((prevState) =>
      prevState = !prevState
    );
  };

  const handleClick = () => {
    setAuthMode((authMode) =>
      authMode === "register" ? "login" : "register"
    );
  };

  const contextValue = {
    authMode,
    setAuthMode,
    currentUser,
    getCurrentUser,
    clearCurrentUser,
    handleAuthModalCall,
    handleClick,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <AuthModal isOpen={isModalOpen} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
