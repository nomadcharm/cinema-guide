import { useEffect, useState } from "react"


export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(document.body.offsetWidth);

  const updateWidth = () => {
    setWindowWidth(document.body.offsetWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth)
    };
  }, []);

  return windowWidth;
}
