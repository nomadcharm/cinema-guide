import {useEffect, useState} from "react";

export const useTrailerModal = (): [boolean, () => void] => {
  const [active, setActive] = useState<boolean>(false);

  const handleModalCall = () => {
    setActive((active) => !active);
  };

  useEffect(() => {
    document.body.style.overflowY = active ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [active]);

  return [active, handleModalCall];
};
