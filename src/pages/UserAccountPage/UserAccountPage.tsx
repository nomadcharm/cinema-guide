import { FC, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserSettings from "../../components/UserSettings/UserSettings";
import FavoriteFilms from "../../components/FavoriteFilms/FavoriteFilms";
import { useSetPageTitle } from "../../hooks";
import "./UserAccountPage.scss"

const UserAccountPage: FC = () => {
  useSetPageTitle(`Мой аккаунт | Cinema Guide`);

  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setCurrentTabIndex(index);
  };

  return (
    <Layout>
      <section className="user-account">
        <div className="container user-account__container">
          <h2 className="page-title user-account__title">Мой аккаунт</h2>

          <ul className="user-account__nav">
            <li className="user-account__nav-item" onClick={() => handleTabClick(0)}>
              <h3
                className={currentTabIndex === 0 ?
                  "user-account__tab user-account__tab--favourites active" :
                  "user-account__tab user-account__tab--favourites"}
              >Избранные фильмы</h3>
            </li>
            <li className="user-account__nav-item" onClick={() => handleTabClick(1)}>
              <h3
                className={currentTabIndex === 1 ?
                  "user-account__tab user-account__tab--settings active" :
                  "user-account__tab user-account__tab--settings"}
              >Настройка аккаунта</h3>
            </li>
          </ul>

          <div className={currentTabIndex === 0 ? "user-account__tab-content active" : "user-account__tab-content"}>
            <FavoriteFilms />
          </div>

          <div className={currentTabIndex === 1 ? "user-account__tab-content active" : "user-account__tab-content"}>
            <UserSettings />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserAccountPage;
