import { FC, ReactNode } from "react";
import ReactPlayer from "react-player";
import { TrailerModalProps } from "../../models/ComponentProps";
import Preloader from "../Loaders/Preloader/Preloader";
import { useTrailerPlayer } from "../../hooks";
import "./TrailerModal.scss";

const TrailerModal: FC<TrailerModalProps> = ({ film, active, handleModalCall }): ReactNode => {
  const {
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
  } = useTrailerPlayer(active);

  return (
    <div 
      className={active ? "trailer-modal is-active" : "trailer-modal"} 
      onClick={(e) => {
        const target: EventTarget = e.target;
        if (target instanceof HTMLElement && target.className === "trailer-modal is-active") {
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
              playerVars: { 
                showinfo: 0,
                rel: 0,
                modestBranding: 1, 
              },
            }
          }}
        />

      </div>
    </div>
  );
};

export default TrailerModal;
