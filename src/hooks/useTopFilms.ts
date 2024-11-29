import { useEffect, useState } from "react";
import { fetchTopFilms } from "../api/FilmsApi";
import { Film, FilmList } from "../models/FilmSchemas";

export const useTopFilms = (): Film[] => {
  const [topFilms, setTopFilms] = useState<FilmList>([]);

  const getTopFilms = async (): Promise<void> => {
    const data: FilmList = await fetchTopFilms();
    setTopFilms(data);
  };

  useEffect(() => {
    getTopFilms();
  }, []);

  return topFilms;
};
