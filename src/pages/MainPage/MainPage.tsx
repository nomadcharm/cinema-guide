import { FC, ReactElement } from "react";
import { useRandomFilm, useSetPageTitle } from "../../hooks";
import Layout from "../../components/Layout/Layout";
import FilmBanner from "../../components/FilmBanner/FilmBanner";
import TopFilms from "../../components/TopFilms/TopFilms";

const MainPage: FC = (): ReactElement => {
  useSetPageTitle(`Cinema Guide`);
  const [randomFilm, getRandomFilm] = useRandomFilm();

  return (
    <Layout>
      <h1 className="visually-hidden">Cinema Guide</h1>
      <FilmBanner film={randomFilm} filmPage={false} handleRefresh={getRandomFilm} />
      <TopFilms />
    </Layout>
  );
};

export default MainPage;
