class AuthError extends Error {
  constructor(message: string) {
      super(message);
      this.name = "AuthError";
  }
}

const validateResponse = async (response: Response): Promise<Response> => {
  if (response.status === 400) {
    throw new AuthError("Неправильный email или пароль")
  } else if (response.status === 404) {
    throw new AuthError("Пользователя с таким email не существует")
  } else if (response.status === 409) {
    throw new AuthError("Пользователь с таким email уже зарегистрирован")
  }

  return response;
}

export default validateResponse;
