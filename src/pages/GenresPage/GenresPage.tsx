import { FC, ReactNode } from "react";
import { Layout } from "../../components/Layout/Layout";
import { useSetPageTitle, useGenres } from "../../hooks";
import GenrePreviewCard from "../../components/GenrePreviewCard/GenrePreviewCard";
import "./GenresPage.scss";

const GenresPage: FC = (): ReactNode => {
  useSetPageTitle(`Жанры | Cinema Guide`);
  const genres = useGenres();

  return (
    <Layout>
      <section className="genres">
        <div className="container genres__container">
          <h1 className="page-title genres__title">Жанры фильмов</h1>
          {
            genres && (
              <ul className="genres__list">
                {
                  genres.map((genre, index) => {
                    return <li className="genres__item" key={index}>
                      <GenrePreviewCard genre={genre} />
                    </li>
                  })
                }
              </ul>
            )
          }
        </div>
      </section>
    </Layout>
  );
};

export default GenresPage;
