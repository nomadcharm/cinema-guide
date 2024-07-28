import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  password: z.string(),
  favorites: z.array(z.string()),
});

const UserOnLoginSchema = UserSchema.pick({ email: true, password: true});
const UserOnAuthSchema = UserSchema.omit({ password: true });

type User = z.infer<typeof UserSchema>;
type UserOnLogin = z.infer<typeof UserOnLoginSchema>;
type UserOnAuth = z.infer<typeof UserOnAuthSchema>;

export {
  UserSchema,
  UserOnLoginSchema,
  UserOnAuthSchema,
  type User,
  type UserOnLogin,
  type UserOnAuth,
}