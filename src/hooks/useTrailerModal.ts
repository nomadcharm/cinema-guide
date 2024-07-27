import {useState} from "react";

export const useTrailerModal = (): [boolean, () => void] => {
  const [active, setActive] = useState<boolean>(false);

  const handleModalCall = () => {
    setActive((active) => !active);
  };

  return [active, handleModalCall];
};
