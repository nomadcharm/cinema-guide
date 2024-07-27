import { useState, useEffect } from 'react';
import { fetchFilmInfo } from '../api/FilmsApi';
import { Film } from '../models/FilmSchemas';

export const useFilmInfo = (id: number): Film | null => {
  const [film, setFilm] = useState<Film | null>(null);

  const getFilmInfo = async (id: number): Promise<void> => {
    const data: Film = await fetchFilmInfo(id);
    setFilm(data);
  };

  useEffect(() => {
    getFilmInfo(id);
  }, [id]);

  return film;
};
