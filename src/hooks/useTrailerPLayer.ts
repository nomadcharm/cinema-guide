import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useWindowWidth } from "./useWindowWidth";

export const useTrailerPlayer = (active: boolean) => {
  const windowWidth = useWindowWidth();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const playerRef = useRef<ReactPlayer | null>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const playTrailer = () => {
    setIsPlaying(prevState => prevState = !prevState);
  };

  const handleOnReady = (): void => {
    setLoading(false);
    closeButtonRef.current?.classList.add("visually-hidden", "active");
  };

  const handleOnPlay = (): void => {
    closeButtonRef.current?.classList.remove("visually-hidden");
    titleBlockRef.current?.classList.remove("visually-hidden");
    playButtonRef.current?.classList.remove("visually-hidden");
    playButtonRef.current?.classList.add("on-play");

    if (windowWidth < 1024) {
      closeButtonRef.current?.classList.add("active");
      playButtonRef.current?.classList.remove("paused");
      titleBlockRef.current?.classList.add("active");
    }
  };

  const handleOnPause = (): void => {
    setIsPlaying(false);
    closeButtonRef.current?.classList.remove("visually-hidden");
    playButtonRef.current?.classList.remove("on-play");
    titleBlockRef.current?.classList.remove("visually-hidden");

    if (windowWidth < 1024) {
      closeButtonRef.current?.classList.remove("active");
      playButtonRef.current?.classList.add("paused");
      titleBlockRef.current?.classList.remove("active");
    }
  };

  useEffect((): void => {
    if (active && playerRef.current) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [active, playerRef]);

  return {
    isPlaying,
    loading,
    playerRef,
    titleBlockRef,
    closeButtonRef,
    playButtonRef,
    playTrailer,
    handleOnReady,
    handleOnPlay,
    handleOnPause,
  };
}
