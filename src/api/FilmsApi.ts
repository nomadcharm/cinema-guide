import { Film, FilmList, FilmPreview } from "../models/FilmSchemas";
import { Genres } from "../models/GenresSchema";

const BASE_MOVIE_URL: string = `https://cinemaguide.skillbox.cc/movie`;

const fetchAllFilms = async (): Promise<FilmList> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}`);
  return data.json();
};

const fetchRandomFilm = async (): Promise<Film> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}/random`);
  return data.json();
};

const fetchTopFilms = async (): Promise<FilmList> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}/top10`);
  return data.json();
};

const fetchFilmInfo = async (id: number): Promise<Film> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}/${id}`);
  return data.json();
};

const fetchGenres = async (): Promise<Genres> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}/genres`);
  return data.json();
};

const fetchFilmsByGenre = async (genre: string, page: number): Promise<Array<FilmPreview>> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}?genre=${genre}&count=10&page=${page}`);
  const response = await data.json();
  return response.sort((a: FilmPreview, b: FilmPreview) => (b.tmdbRating ?? 0) - (a.tmdbRating ?? 0));
};

const fetchFilmsByTitle = async (searchItem: string): Promise<FilmList> => {
  const data: Response = await fetch(`${BASE_MOVIE_URL}/?title=${searchItem}`);
  return data.json();
};

export {
  fetchAllFilms,
  fetchRandomFilm,
  fetchTopFilms,
  fetchFilmInfo,
  fetchGenres,
  fetchFilmsByGenre,
  fetchFilmsByTitle,
};
