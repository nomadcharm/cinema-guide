import { useState } from "react";

export const useAuthModal = (): [string, boolean, () => void, () => void] => {
  const [authMode, setAuthMode] = useState<string>("register");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  console.log(authMode)

  return [authMode, isModalOpen, handleAuthModalCall, handleClick];
};
