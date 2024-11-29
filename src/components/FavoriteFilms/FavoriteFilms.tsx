import { FC, ReactNode, useEffect } from "react";
import { useFavorites } from "../../hooks";
import FilmPreviewCard from "../FilmPreviewCard/FilmPreviewCard";
import "./FavoriteFilms.scss";
import Button from "../Button/Button";

const FavoriteFilms: FC = (): ReactNode => {
  const [favorites, getFavorites, removeFromUserFavorites] = useFavorites();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <div className="favorites">
      {
        favorites && favorites.length > 0 ? (
          <ul className="favorites__list">
            {
              favorites.map((film) => {
                return <li className="favorites__item" key={film.id}>
                  <Button
                    className="favorites__remove-btn"
                    onClick={() => removeFromUserFavorites(film.id)}
                    aria-label="Удалить фильм из избранного"
                  />
                  <FilmPreviewCard id={film.id} title={film.title} posterUrl={film.posterUrl} />
                </li>
              })
            }
          </ul>
        ) : <p className="favorites__empty-list">Добавьте первый фильм в избранное</p>
      }
    </div>
  );
};

export default FavoriteFilms;
