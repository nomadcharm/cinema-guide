import { z } from "zod";

const UserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  password: z.string(),
  favorites: z.array(z.string()),
});

const UserOnRegisterSchema = UserSchema.omit({favorites: true});
const UserOnLoginSchema = UserSchema.pick({ email: true, password: true});
const UserOnAuthSchema = UserSchema.omit({ password: true });

type User = z.infer<typeof UserSchema>;
type UserOnRegister = z.infer<typeof UserOnRegisterSchema>
type UserOnLogin = z.infer<typeof UserOnLoginSchema>;
type UserOnAuth = z.infer<typeof UserOnAuthSchema>;

export {
  UserSchema,
  UserOnRegisterSchema,
  UserOnLoginSchema,
  UserOnAuthSchema,
  type User,
  type UserOnRegister,
  type UserOnLogin,
  type UserOnAuth,
};
