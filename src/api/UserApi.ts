import { UserOnAuth, UserOnAuthSchema } from "../models/UserSchemas";

const BASE_AUTH_URL = `https://cinemaguide.skillbox.cc/auth`;
const BASE_URL = `https://cinemaguide.skillbox.cc`;

// const registerUser = () => {

// }

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
  loginUser,
  logoutUser,
  fetchCurrentUser,
}

// function logoutUser(): Promise<void> {
//   return fetch(`${URL_LOGOUT}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(() => undefined)
// }

// // const loginUser = (email: string, password: string): Promise<void> => {
// //   return fetch("https://cinemaguide.skillbox.cc/auth/login", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json"
// //     },
// //     credentials: "include",
// //     body: JSON.stringify({ email, password })
// //   })
// //   .then(response => validateResponse(response))
// //   .then(() => undefined)
// // }

// axios

// import axios from "./config"
// const LOGIN_URL = `/auth/login`;

// const loginUser = async (email: string, password: string) => {
//   const data = await axios.post(LOGIN_URL, JSON.stringify({ email, password }),
//     {
//       headers: {
//         "Content-Type": "application/json"
//       },
//       withCredentials: true,
//     });

//   const accessToken = data?.data?.accessToken;
//   return accessToken;
// }

// export { loginUser }