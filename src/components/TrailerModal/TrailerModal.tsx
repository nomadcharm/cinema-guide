import { FC, ReactElement, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Film } from "../../models/FilmSchemas";
import Preloader from "../Loaders/Preloader/Preloader";
import "./TrailerModal.scss";

interface TrailerModalProps {
  film: Film,
  active: boolean;
  handleModalCall: () => void;
}

const TrailerModal: FC<TrailerModalProps> = ({ film, active, handleModalCall }): ReactElement => {
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

  useEffect(() => {
    if (active && playerRef.current) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [active, playerRef]);

  return (
    <div 
      className={active ? "trailer-modal is-active" : "trailer-modal"} 
      onClick={(e) => {
        if ((e.target as HTMLElement).className === "trailer-modal is-active") {
          handleModalCall();
        }
      }}
    >
      <div className="trailer-modal__inner">
        <button 
          className="trailer-modal__play visually-hidden"
          ref={playButtonRef}
          onClick={playTrailer}
          aria-label="Проиграть трейлер"
        />

        <button 
          className="trailer-modal__close"
          ref={closeButtonRef}
          onClick={() => {
            playerRef.current?.seekTo(0);
            handleModalCall();
          }}
          aria-label="Закрыть окно" />

        <div className="trailer-modal__title active visually-hidden" ref={titleBlockRef}>
          <p>{film.title}</p>
        </div>

        {active && loading && <Preloader />}

        <ReactPlayer
          className="player"
          url={film.trailerUrl}
          ref={playerRef}
          width={`100%`}
          height={`100%`}
          volume={0.5}
          controls={false}
          playing={isPlaying}
          onReady={() => handleOnReady()}
          onPlay={() => handleOnPlay()}
          onPause={() => handleOnPause()}
          onEnded={() => handleModalCall()}
          onDisablePIP={() => handleModalCall()}
          config={{
            youtube: {
              playerVars: { showinfo: 0 }
            }
          }}
        />

      </div>
    </div>
  );
};

export default TrailerModal;
