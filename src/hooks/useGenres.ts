import { useEffect, useState } from "react";
import { fetchGenres } from "../api/FilmsApi";
import { Genres } from "../models/GenresSchema";

export const useGenres = (): Genres => {
  const [genres, setGenres] = useState<Genres>([]);

  const getGenres = async (): Promise<void> => {
    const data: string[] = await fetchGenres();
    setGenres(data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return genres;
};
