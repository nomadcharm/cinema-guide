import { FC, lazy, ReactElement, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Film } from "../../models/FilmSchemas";
import { addFilmToFavorites, removeFromFavorites } from "../../api/FavoritesApi";
import { backdropStub, toRefresh, toFavor, favored } from "../../assets/assets";
import { useAuthModal, useFavorites, useTrailerModal } from "../../hooks";
import { formatTime, setRatingColor } from "../../utils";
import AuthContext from "../../context/AuthProvider";
import "./FilmBanner.scss";

const LazyTrailerModal = lazy(() => import("../../components/TrailerModal/TrailerModal"));
const LazyAuthModal = lazy(() => import("../AuthModal/AuthModal"))

interface FilmBannerProps {
  film: Film | null,
  filmPage: boolean,
  handleRefresh?: () => Promise<void>,
}

const FilmBanner: FC<FilmBannerProps> = ({ film, filmPage, handleRefresh }): ReactElement => {
  const [active, handleModalCall] = useTrailerModal();
  const [favorites, getFavorites] = useFavorites();
  const [isFavored, setIsFavored] = useState<boolean>(false);

  const { currentUser } = useContext(AuthContext);
  const [, isModalOpen, handleAuthModalCall] = useAuthModal();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  useEffect(() => {
    if (film && favorites.some(fav => fav.id === film.id)) {
      setIsFavored(true);
    } else {
      setIsFavored(false);
    }
  }, [film, favorites]);

  const toggleFavorite = (id: number) => {
    if (isFavored) {
      removeFromFavorites(id);
    } else {
      addFilmToFavorites(id.toString());
    }
    setIsFavored(!isFavored);
  };

  return (
    <>
      {
        film && <LazyTrailerModal film={film} active={active} handleModalCall={handleModalCall} />
      }

      <LazyAuthModal isOpen={isModalOpen} handleAuthFormCall={handleAuthModalCall} />

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
                        </>
                      ) : (
                        <>
                          <button className="button button-primary" onClick={() => handleModalCall()}>Трейлер</button>
                          <Link className="button button-secondary" to={`/movie/${film.id}`}>О фильме</Link>
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
