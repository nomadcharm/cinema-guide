import { FC, useContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import FilmPreviewCard from "../../components/FilmPreviewCard/FilmPreviewCard";
import { logoutUser } from "../../api/UserApi";
import Layout from "../../components/Layout/Layout";
import "./UserAccountPage.scss"
import { queryClient } from "../../api/queryClient";
import { useSetPageTitle, useFavorites } from "../../hooks";
import AuthContext from "../../context/AuthProvider";

const UserAccountPage: FC = () => {
  useSetPageTitle(`Мой аккаунт | Cinema Guide`);
  
  const navigate = useNavigate();
  const { currentUser, getCurrentUser, clearCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const [favorites, getFavorites, removeFromUserFavorites] = useFavorites();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess() {
      clearCurrentUser();
      navigate("/");
    }
  }, queryClient);

  const handleLogout = (): void => {
    logoutMutation.mutate();
  };

  return (
    <Layout>
      <section className="user-account">
        <div className="container user-account__container">
          {
            currentUser ?
              <>
                <h2 className="page-title user-account__title">Мой аккаунт</h2>

                <ul className="user-account__nav">
                  <li className="user-account__nav-item">
                    <h3 className="user-account__tab user-account__tab--favourites">Избранные фильмы</h3>
                  </li>
                  <li className="user-account__nav-item">
                    <h3 className="user-account__tab active user-account__tab--settings">Настройка аккаунта</h3>
                  </li>
                </ul>

                <div className="user-account__content">
                  <div className="user-account__info">
                    <p className="user-account__initials">
                      {currentUser.name.substring(0, 1)}{currentUser.surname.substring(0, 1)}
                    </p>
                    <div>
                      <p className="user-account__category">Имя Фамилия</p>
                      <p className="user-account__details">{currentUser.name} {currentUser.surname}</p>
                    </div>
                  </div>
                  <div className="user-account__info user-account__info--email">
                    <div>
                      <p className="user-account__category">Электронная почта</p>
                      <p className="user-account__details">{currentUser.email}</p>
                    </div>
                  </div>
                </div>

                <button
                  className="button button-primary"
                  onClick={() => handleLogout()}
                >Выйти из аккаунта</button>
              </> :
              <img src="https://media.tenor.com/_BiwWBWhYucAAAAe/what-huh.png" alt="" />
          }

          <section className="user-favorites">
            {
              favorites ? (
                <ul className="user-favorites__list">
                  {
                    favorites.map((film) => {
                      return <li className="user-favorites__item" key={film.id}>
                        <button
                          className="user-favorites__remove-btn"
                          onClick={() => removeFromUserFavorites(film.id)}
                          aria-label="Удалить фильм из избранного"
                        />
                        <FilmPreviewCard id={film.id} title={film.title} posterUrl={film.posterUrl} />
                      </li>
                    })
                  }
                </ul>
              ) : null
            }
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default UserAccountPage;