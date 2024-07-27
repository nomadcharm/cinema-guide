import { useEffect, useState } from "react";
import { fetchFilmsByGenre } from "../api/FilmsApi";
import { FilmPreview } from "../models/FilmSchemas";

export const useFilmsByGenre = (genre: string): [Array<FilmPreview>, number, React.Dispatch<React.SetStateAction<number>>, boolean] => {
  const [filmsByGenre, setFilmsByGenre] = useState<Array<FilmPreview>>([]);
  const [page, setPage] = useState(0);

  const [hasMoreFilms, setHasMoreFilms] = useState<boolean>(true);

  const getFilmsByGenre = async (genre: string, page: number) => {
    const data: Array<FilmPreview> = await fetchFilmsByGenre(genre, page);
    if (data.length === 0 || data.length < 10) {
      setHasMoreFilms(false);
    }

    setFilmsByGenre(prevFilms => [...prevFilms, ...data]);
  };

  useEffect(() => {
    getFilmsByGenre(genre, page);
  }, [genre, page]);

  return [filmsByGenre, page, setPage, hasMoreFilms];
};
