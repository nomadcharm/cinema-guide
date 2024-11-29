import { UserOnAuth, UserOnAuthSchema } from "../models/UserSchemas";
import validateResponse from "./responseValidation";

const BASE_URL = `https://cinemaguide.skillbox.cc`;
const BASE_AUTH_URL = `https://cinemaguide.skillbox.cc/auth`;

const registerUser = async (email: string, name: string, surname: string, password: string) => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ email, name, surname, password })
  });
  return await validateResponse(response);
}

const loginUser = async (email: string, password: string): Promise<Response> => {
  const response = await fetch(`${BASE_AUTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({ email, password })
  });
  return await validateResponse(response);
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

const fetchCurrentUser = async (): Promise<UserOnAuth> => {
  const res = await fetch(`${BASE_URL}/profile`, {
    credentials: "include",
  });
  const data = await res.json();
  return UserOnAuthSchema.parse(data);
}

export {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
};
