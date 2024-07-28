import { UserOnAuth, UserOnAuthSchema } from "../models/UserSchemas";

const BASE_URL = `https://cinemaguide.skillbox.cc`;
const BASE_AUTH_URL = `https://cinemaguide.skillbox.cc/auth`;

const registerUser = (email: string, name: string, surname: string, password: string) => {
  return fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ email, name, surname, password })
  })
}

const loginUser = (email: string, password: string): Promise<Response> => {
  return fetch(`${BASE_AUTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ email, password })
  })
}

const logoutUser = (): Promise<Response> => {
  return fetch(`${BASE_AUTH_URL}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
  })
}

const fetchCurrentUser = (): Promise<UserOnAuth> => {
  return fetch(`${BASE_URL}/profile`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => UserOnAuthSchema.parse(data))
}

export {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
}