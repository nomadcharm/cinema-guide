import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  favorites: z.array(z.string()),
});

type User = z.infer<typeof UserSchema>

export {
  type User,
}