import { FC, ReactElement } from "react";
import { useRandomFilm, useSetPageTitle } from "../../hooks";
import { Layout } from "../../components/Layout/Layout";
import { MemoTopFilms } from "../../components/TopFilms/TopFilms";
import FilmBanner from "../../components/FilmBanner/FilmBanner";

const MainPage: FC = (): ReactElement => {
  useSetPageTitle(`Cinema Guide`);
  const [randomFilm, getRandomFilm] = useRandomFilm();

  return (
    <Layout>
      <h1 className="visually-hidden">Cinema Guide</h1>
      <FilmBanner film={randomFilm} filmPage={false} handleRefresh={getRandomFilm} />
      <MemoTopFilms />
    </Layout>
  );
};

export default MainPage;
