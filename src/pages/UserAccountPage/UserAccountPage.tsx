import { FC, lazy, ReactNode, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { useSetPageTitle, useWindowWidth } from "../../hooks";
import FavoriteFilms from "../../components/FavoriteFilms/FavoriteFilms";
import "./UserAccountPage.scss"

const UserSettings = lazy(() => import("../../components/UserSettings/UserSettings"));

const UserAccountPage: FC = (): ReactNode => {
  useSetPageTitle(`Мой аккаунт | Cinema Guide`);
  const windowWidth = useWindowWidth();

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
              >{windowWidth <= 768 ? "Избранное" : "Избранные фильмы"}</h3>
            </li>
            <li className="user-account__nav-item" onClick={() => handleTabClick(1)}>
              <h3
                className={currentTabIndex === 1 ?
                  "user-account__tab user-account__tab--settings active" :
                  "user-account__tab user-account__tab--settings"}
              >{windowWidth <= 768 ? "Настройки" : "Настройка аккаунта"}</h3>
            </li>
          </ul>

          <div className={currentTabIndex === 0 ? "user-account__tab-content tab-1 active" : "user-account__tab-content tab-1"}>
            <FavoriteFilms />
          </div>

          <div className={currentTabIndex === 1 ? "user-account__tab-content tab-2 active" : "user-account__tab-content tab-2"}>
            {currentTabIndex === 1 && <UserSettings />}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserAccountPage;
