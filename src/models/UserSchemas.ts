import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2х символов" }).trim(),
  surname: z.string().min(2, { message: "Фамилия должна содержать не менее 2х символов" }).trim(),
  email: z.string().trim().email({ message: "Невалидный формат email" }),
  password: z.string().min(8, { message: "Пароль должен состоять из не менее 8 символов" }).trim(),
  confirmPassword: z.string().min(8, { message: "Пароль должен состоять из не менее 8 символов" }).trim().optional(),
  favorites: z.array(z.string()),
})

const UserOnRegisterSchema = UserSchema.omit({ favorites: true });
const UserOnLoginSchema = UserSchema.pick({ email: true, password: true });
const UserOnAuthSchema = UserSchema.omit({ password: true, confirmPassword: true });

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
