import { useState } from "react";

export const useShowPassword = (): [boolean, () => void] => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  const handleShowPassword = () => {
    setIsPasswordShown(prev => !prev);
  };

  return [isPasswordShown, handleShowPassword];
};
