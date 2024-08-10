import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export const useTrailerPlayer = (active: boolean) => {
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
    closeButtonRef.current?.classList.add("visually-hidden", "paused");
  };

  const handleOnPlay = (): void => {
    closeButtonRef.current?.classList.remove("visually-hidden");
    titleBlockRef.current?.classList.remove("visually-hidden");
    playButtonRef.current?.classList.remove("visually-hidden");
    playButtonRef.current?.classList.add("on-play");
  };

  const handleOnPause = (): void => {
    setIsPlaying(false);
    closeButtonRef.current?.classList.remove("visually-hidden");
    playButtonRef.current?.classList.remove("on-play");
    titleBlockRef.current?.classList.remove("visually-hidden");
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
