import { createContext, FC, lazy, ReactNode, Suspense, useCallback, useEffect, useState } from "react";
import { AuthContextProps, AuthProviderProps } from "../models/ComponentProps";
import { fetchCurrentUser } from "../api/UserApi";
import { UserOnAuth } from "../models/UserSchemas";
import MainLoader from "../components/Loaders/MainLoader/MainLoader";

export const AuthContext = createContext<AuthContextProps>({
  authMode: "login",
  setAuthMode: () => { },
  currentUser: null,
  getCurrentUser: () => { },
  clearCurrentUser: () => { },
  handleAuthModalCall: () => { },
  handleClick: () => { },
});

const AuthModal = lazy(() => import("../components/AuthModal/AuthModal"));

export const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactNode => {
  const [currentUser, setCurrentUser] = useState<UserOnAuth | null>(null);
  const [authMode, setAuthMode] = useState<string>("login");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = isModalOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isModalOpen]);

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
      {isModalOpen &&
        <Suspense fallback={<MainLoader />}>
          <AuthModal isOpen={isModalOpen} />
        </Suspense>}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
