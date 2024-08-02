const BASE_FAVORITES_URL = `https://cinemaguide.skillbox.cc/favorites`;

const addFilmToFavorites = (id: string): Promise<Response> => {
  return fetch(BASE_FAVORITES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ id }),
  });
};

const fetchFavoriteFilms = (): Promise<Response> => {
  return fetch(BASE_FAVORITES_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

const removeFromFavorites = (id: number): Promise<Response> => {
  return fetch(`${BASE_FAVORITES_URL}/${id}`, {
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};

export {
  addFilmToFavorites,
  fetchFavoriteFilms,
  removeFromFavorites,
};
