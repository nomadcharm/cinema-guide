import { useState, useCallback, useEffect } from "react";
import { fetchFavoriteFilms, removeFromFavorites } from "../api/FavoritesApi";
import { FilmList } from "../models/FilmSchemas";

export const useFavorites = (): [FilmList, () => Promise<void>, (filmId: number) => Promise<void>] => {
  const [favorites, setFavorites] = useState<FilmList>([]);

  const getFavorites = useCallback(async (): Promise<void> => {
    const response: Response = await fetchFavoriteFilms();
    const data: FilmList = await response.json();
    setFavorites(data);
  }, []);

  const removeFromUserFavorites = useCallback(async (filmId: number): Promise<void> => {
    await removeFromFavorites(filmId);
    setFavorites(prevFavorites => prevFavorites.filter((film: { id: number }) => film.id !== filmId));
  }, []);

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return [favorites, getFavorites, removeFromUserFavorites];
};
