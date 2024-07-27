import { z } from 'zod';

const GenresSchema = z.array(z.string());
type Genres = z.infer<typeof GenresSchema>;

export {
  type Genres,
};
