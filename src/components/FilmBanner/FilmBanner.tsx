import { FC, lazy, ReactNode, Suspense, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { backdropStub, toRefresh, toFavor, favored } from "../../assets/assets";
import { useFavorites, useMarkFavorite, useTrailerModal } from "../../hooks";
import { formatTime, setRatingColor } from "../../utils";
import { FilmBannerProps } from "../../models/ComponentProps";
import MainLoader from "../Loaders/MainLoader/MainLoader";
import AuthContext from "../../context/AuthProvider";
import "./FilmBanner.scss";

const TrailerModal = lazy(() => import("../../components/TrailerModal/TrailerModal"));

const FilmBanner: FC<FilmBannerProps> = ({ film, filmPage, handleRefresh }): ReactNode => {
  const [active, handleModalCall] = useTrailerModal();
  const [favorites, getFavorites] = useFavorites();
  const [isFavored, toggleFavorite] = useMarkFavorite(film, favorites);
  const { currentUser, handleAuthModalCall } = useContext(AuthContext);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <>
      {film && active && (
        <Suspense fallback={<MainLoader />}>
          <TrailerModal film={film} active={active} handleModalCall={handleModalCall} />
        </Suspense>
      )}

      <section className="film-banner">
        <div className="container film-banner__container">
          {
            film && (
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

                  {
                    filmPage ? (
                      <div className="film-banner__actions film-banner__actions--film-page">
                        <button className="button button-primary button-film-trailer" onClick={() => handleModalCall()}>Трейлер</button>
                        <button
                          className="button button-icon button-favorite"
                          aria-label="Добавить в избранное"
                          onClick={currentUser ? () => toggleFavorite(film.id) : () => handleAuthModalCall()}
                        >
                          {
                            isFavored ?
                              <ReactSVG src={favored} /> :
                              <ReactSVG src={toFavor} />
                          }
                        </button>
                      </div>
                    ) : (
                      <div className="film-banner__actions film-banner__actions--random">
                        <button className="button button-primary button-trailer" onClick={() => handleModalCall()}>Трейлер</button>
                        <Link className="button button-secondary button-about" to={`/movie/${film.id}`}>О фильме</Link>
                        <button
                          className="button button-icon button-favorite"
                          aria-label="Добавить в избранное"
                          onClick={currentUser ? () => toggleFavorite(film.id) : () => handleAuthModalCall()}
                        >
                          <ReactSVG src={isFavored ? favored : toFavor} className={isFavored ? "svg-favored" : "svg"} />
                        </button>
                        <button className="button button-icon button-refresh" onClick={handleRefresh} aria-label="Загрузить новый случайный фильм">
                          <ReactSVG src={toRefresh} />
                        </button>
                      </div>
                    )
                  }
                </div>

                <div className="film-banner__backdrop">
                  <img src={film.backdropUrl ? film.backdropUrl : backdropStub} alt={film.title} width={900} height={530} />
                  <div className="overlay" />
                </div>
              </>
            )
          }
        </div>
      </section>
    </>
  );
};

export default FilmBanner;
