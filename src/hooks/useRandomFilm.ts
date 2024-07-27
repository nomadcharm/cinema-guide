import { useState, useCallback, useEffect } from 'react';
import { fetchRandomFilm } from '../api/FilmsApi';
import { Film } from '../models/FilmSchemas';

export const useRandomFilm = (): [Film | null, () => Promise<void>] => {
  const [randomFilm, setRandomFilm] = useState<Film | null>(null);

  const getRandomFilm = useCallback(async (): Promise<void> => {
    const data: Film = await fetchRandomFilm();
    setRandomFilm(data);
  }, []);

  useEffect(() => {
    getRandomFilm();
  }, []);

  return [randomFilm, getRandomFilm];
};