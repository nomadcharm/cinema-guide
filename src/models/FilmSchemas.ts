import { z } from 'zod';

const FilmSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string(),
  language: z.string(),
  releaseYear: z.number(),
  releaseDate: z.string(),
  genres: z.array(z.string()),
  plot: z.string(),
  runtime: z.number(),
  budget: z.string(),
  revenue: z.string(),
  homepage: z.string(),
  status: z.string(),
  posterUrl: z.string(),
  backdropUrl: z.string(),
  trailerUrl: z.string(),
  trailerYoutubeId: z.string(),
  tmdbRating: z.number(),
  searchL: z.string(),
  keywords: z.array(z.string()),
  countriesOfOrigin: z.array(z.string()),
  languages: z.array(z.string()),
  cast: z.array(z.string()),
  director: z.string(),
  production: z.string(),
  awardsSummary: z.string(),
});

const FilmListSchema = z.array(FilmSchema);
const FilmPreviewSchema = FilmSchema.pick({id: true, title: true, posterUrl: true });

type Film = z.infer<typeof FilmSchema>;
type FilmList = z.infer<typeof FilmListSchema>;
type FilmPreview = z.infer<typeof FilmPreviewSchema>;

export {
  type Film,
  type FilmList,
  type FilmPreview,
};
