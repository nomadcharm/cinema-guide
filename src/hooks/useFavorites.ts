import { useState, useEffect } from "react";
import { fetchFavoriteFilms } from "../api/FavoritesApi";
import { FilmList } from "../models/FilmSchemas";

export const useFavorites = (): [FilmList, () => Promise<void>] => {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    const response = await fetchFavoriteFilms();
    const data = await response.json();
    setFavorites(data);
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return [favorites, getFavorites];
}

