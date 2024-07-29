import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../api/UserApi";
import Layout from "../../components/Layout/Layout";
import "./UserAccountPage.scss"
import { queryClient } from "../../api/queryClient";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthProvider";
import { useSetPageTitle } from "../../hooks";

const UserAccountPage = () => {
  useSetPageTitle(`Мой аккаунт | Cinema Guide`)

  const navigate = useNavigate();

  const { currentUser, getCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const logoutMutation = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess() {
      // queryClient.invalidateQueries({ queryKey: ["users", "current"], })
      navigate("/")
    }
  }, queryClient)

  const handleLogout = () => {
    logoutMutation.mutate()
  }

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
        </div>
      </section>
    </Layout>
  );
};

export default UserAccountPage;
