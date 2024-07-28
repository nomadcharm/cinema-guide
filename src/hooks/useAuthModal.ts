import { useState } from "react";

export const useAuthModal = (): [string, boolean, () => void, () => void] => {
  const [authMode, setAuthMode] = useState<string>("login");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAuthModalCall = () => {
    setIsModalOpen((prevState) =>
      prevState = !prevState
    );
  };

  const handleClick = () => {
    setAuthMode((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return [authMode, isModalOpen, handleAuthModalCall, handleClick];
};
