import { FC, ReactElement } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { ReactSVG } from "react-svg";
import Layout from "../../components/Layout/Layout";
import { useFilmsByGenre, useSetPageTitle } from "../../hooks";
import FilmPreviewCard from "../../components/FilmPreviewCard/FilmPreviewCard";
import { capitalizeString } from "../../utils";
import { back } from "../../assets/assets";
import "./GenrePage.scss";

const GenrePage: FC = (): ReactElement => {
  const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
  const genre: string = searchParams.get("genre") ?? "";

  const [filmsByGenre, page, setPage, hasMoreFilms] = useFilmsByGenre(genre);
  const navigate: NavigateFunction = useNavigate();

  useSetPageTitle(`${capitalizeString(genre)} | Cinema Guide`, genre);

  return (
    <Layout>
      <section className="films-by-genre">
        <div className="container films-by-genre__container">
          <div className="films-by-genre__title-block">
            <button className="films-by-genre__nav-back" onClick={() => navigate(-1)} aria-label="К списку жанров">
              <ReactSVG src={back} />
            </button>
            <h1 className="page-title films-by-genre__title">{capitalizeString(genre)}</h1>
          </div>
          {
            filmsByGenre ? (
              <ul className="films-by-genre__list">
                {
                  filmsByGenre.map((film) => {
                    return <li className="films-by-genre__item" key={film.id}>
                      <FilmPreviewCard id={film.id} title={film.title} posterUrl={film.posterUrl} />
                    </li>
                  })
                }
              </ul>
            ) : null
          }

          {
            hasMoreFilms ? (
              <button className="films-by-genre__load-btn" onClick={() => setPage(page + 1)}>Показать ещё</button>
            ) : null
          }

        </div>
      </section>
    </Layout>
  )
}

export default GenrePage
