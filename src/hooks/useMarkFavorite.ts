import { useState, useEffect } from "react";
import { removeFromFavorites, addFilmToFavorites } from "../api/FavoritesApi";
import { Film, FilmList } from "../models/FilmSchemas";

export const useMarkFavorite = (film: Film | null, favorites: FilmList): [boolean, (id: number) => void] => {
  const [isFavored, setIsFavored] = useState<boolean>(false);

  const toggleFavorite = (id: number) => {
    if (isFavored) {
      removeFromFavorites(id);
    } else {
      addFilmToFavorites(id.toString());
    }
    setIsFavored(!isFavored);
  };

  useEffect(() => {
    if (film && favorites.some(fav => fav.id === film.id)) {
      setIsFavored(true);
    } else {
      setIsFavored(false);
    }
  }, [film, favorites]);

  return [isFavored, toggleFavorite];
};
