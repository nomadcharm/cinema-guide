import { FC, lazy, ReactElement } from "react";
import { Link } from "react-router-dom";
import { Film } from "../../models/FilmSchemas";
import "./FilmBanner.scss";
import { formatTime, setRatingColor } from "../../utils";
import { backdropStub, toRefresh, toFavor } from "../../assets/assets";
import { useTrailerModal } from "../../hooks";
import { ReactSVG } from "react-svg";

const LazyTrailerModal = lazy(() => import("../../components/TrailerModal/TrailerModal"));

interface FilmBannerProps {
  film: Film | null,
  filmPage: boolean,
  handleRefresh?: () => Promise<void>,
}

const FilmBanner: FC<FilmBannerProps> = ({ film, filmPage, handleRefresh }): ReactElement => {
  const [active, handleModalCall] = useTrailerModal();

  return (
    <>
      {
        film && <LazyTrailerModal film={film} active={active} handleModalCall={handleModalCall} />
      }

      <section className="film-banner">
        <div className="container film-banner__container">
          {
            film ? (
              <>
                <div className="film-banner__content">
                  <div className="film-banner__block">
                    <div className="film-banner__info">
                      <p className={setRatingColor(film.tmdbRating)}>{film.tmdbRating.toFixed(1)}</p>
                      <p className="film-banner__release-year">{film.releaseYear}</p>
                      <p className="film-banner__genre">{film.genres[0]}</p>
                      <p className="film-banner__runtime">{formatTime(film.runtime)}</p>
                    </div>
                    <div className="film-banner__description">
                      <h2 className="page-title film-banner__title">{film.title}</h2>
                      <p className={filmPage ? "film-banner__plot" : "film-banner__plot-preview"}>{film.plot}</p>
                    </div>
                  </div>

                  <div className="film-banner__actions">
                    {
                      filmPage ? (
                        <>
                          <button className="button button-primary" onClick={() => handleModalCall()}>Трейлер</button>
                          <button className="button button-icon button-favorite" aria-label="Добавить в избранное">
                            <ReactSVG src={toFavor} />
                          </button>
                        </>

                      ) : (
                        <>
                          <button className="button button-primary" onClick={() => handleModalCall()}>Трейлер</button>
                          <Link className="button button-secondary" to={`/movie/${film.id}`}>О фильме</Link>
                          <button className="button button-icon button-favorite" aria-label="Добавить в избранное">
                            <ReactSVG src={toFavor} />
                          </button>
                          <button className="button button-icon button-refresh" onClick={handleRefresh} aria-label="Загрузить новый случайный фильм">
                            <ReactSVG src={toRefresh} />
                          </button>
                        </>
                      )
                    }
                  </div>
                </div>


                <div className="film-banner__backdrop">
                  <img src={film.backdropUrl ? film.backdropUrl : backdropStub} alt={film.title} width={900} height={530} />
                  <div className="overlay" />
                </div>
              </>
            ) : null
          }
        </div>
      </section>
    </>
  );
};

export default FilmBanner;
