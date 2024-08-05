const validateResponse = async (response: Response): Promise<Response> => {
  if (response.status === 400) {
    throw new Error("Неправильный email или пароль")
  } else if (response.status === 404) {
    throw new Error("Пользователя с таким email не существует")
  } else if (response.status === 409) {
    throw new Error("Пользователь с таким email уже зарегистрирован")
  }

  return response;
}

export default validateResponse;
