import { FC, useEffect } from "react";
import { useFavorites } from "../../hooks";
import FilmPreviewCard from "../FilmPreviewCard/FilmPreviewCard";
import "./FavoriteFilms.scss";

const FavoriteFilms: FC = () => {
  const [favorites, getFavorites, removeFromUserFavorites] = useFavorites();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <div className="favorites">
      {
        favorites ? (
          <ul className="favorites__list">
            {
              favorites.map((film) => {
                return <li className="favorites__item" key={film.id}>
                  <button
                    className="favorites__remove-btn"
                    onClick={() => removeFromUserFavorites(film.id)}
                    aria-label="Удалить фильм из избранного"
                  />
                  <FilmPreviewCard id={film.id} title={film.title} posterUrl={film.posterUrl} />
                </li>
              })
            }
          </ul>
        ) : null
      }
    </div>
  );
};

export default FavoriteFilms;
