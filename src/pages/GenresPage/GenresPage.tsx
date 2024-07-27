import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useSetPageTitle, useGenres } from "../../hooks";
import { pickGenrePoster } from "../../utils";
import "./GenresPage.scss";

const GenresPage: FC = (): ReactElement => {
  useSetPageTitle(`Жанры | Cinema Guide`)
  const genres = useGenres();

  return (
      <Layout>
        <section className="genres">
          <div className="container genres__container">
            <h1 className="page-title genres__title">Жанры фильмов</h1>
            {
              genres ? (
                <ul className="genres__list">
                  {
                    genres.map((genre, index) => {
                      return <li className="genres__item" key={index}>
                        <article className="genre-card">
                          <Link className="genre-card__link" to={`/movie?genre=${genre}`} >
                            <img className="genre-card__img" src={pickGenrePoster(genre)} alt="" />
                            <div className="genre-card__name">
                              <p>{genre}</p>
                            </div>
                          </Link>
                        </article>
                      </li>
                    })
                  }
                </ul>
              ) : null
            }
          </div>
        </section>
      </Layout>
  );
};

export default GenresPage;
