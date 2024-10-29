import { useState, useEffect } from "react";
import { fetchFilmInfo } from "../api/FilmsApi";
import { Film } from "../models/FilmSchemas";

export const useFilmInfo = (id: number): {film: Film | null, error: boolean} => {
  const [film, setFilm] = useState<Film | null>(null);
  const [error, setError] = useState<boolean>(false);

  const getFilmInfo = async (id: number): Promise<void> => {
    const data: Film = await fetchFilmInfo(id);
    if (!data || Object.keys(data).length === 0) {
      setError(true)
    }
    setFilm(data);
  };

  useEffect(() => {
    getFilmInfo(id);
  }, [id]);

  return {film, error};
};
