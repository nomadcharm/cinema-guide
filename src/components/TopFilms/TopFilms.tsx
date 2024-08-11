import { FC, ReactElement } from "react";
import { useTopFilms } from "../../hooks";
import FilmPreviewCard from "../FilmPreviewCard/FilmPreviewCard";
import "./TopFilms.scss";

const TopFilms: FC = (): ReactElement => {
  const topFilms = useTopFilms();

  return (
    <section className="top-films">
      <div className="container top-films__container">
        <h2 className="top-films__title section-title">Топ 10 фильмов</h2>
        {
          topFilms ? (
            <div className="list-wrapper">
              <ul className="top-films__list">
                {
                  topFilms.map((film, index) => {
                    return <li className="top-films__item" key={film.id}>
                      <p className="top-films__number">{index + 1}</p>
                      <FilmPreviewCard id={film.id} title={film.title} posterUrl={film.posterUrl} />
                    </li>
                  })
                }
              </ul>
            </div>
          ) : null
        }
      </div>
    </section>
  );
};

export default TopFilms;
