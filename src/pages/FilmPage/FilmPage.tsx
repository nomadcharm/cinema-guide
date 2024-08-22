import { FC, ReactNode} from "react";
import { PathMatch, useMatch } from "react-router"
import { Layout } from "../../components/Layout/Layout";
import { formatCurrency, formatLanguageTag } from "../../utils";
import FilmBanner from "../../components/FilmBanner/FilmBanner";
import { useFilmInfo, useSetPageTitle } from "../../hooks";
import "./FilmPage.scss";

const FilmPage: FC = (): ReactNode=> {
  const matchId: PathMatch<"id"> | null = useMatch("/movie/:id");
  const id = Number(matchId?.params?.id);
  const film = useFilmInfo(id);

  useSetPageTitle(`${film?.title} | Cinema Guide`, film?.title)

  return (
    <Layout>
      <FilmBanner film={film} filmPage={true} />
      <section className="film">
        <div className="container film__container">
          <h2 className="section-title film__title">О фильме</h2>
          {
            film && (
              <>
                <dl className="film-details">
                  <dt className="film-details__category">
                    <span>Язык оригинала</span>
                  </dt>
                  <dd className="film-details__description">
                    <span>
                      {film.language ? formatLanguageTag.of(film.language) : "Нет информации"}
                    </span>
                  </dd>
                </dl>
                <dl className="film-details">
                  <dt className="film-details__category">
                    <span>Бюджет</span>
                  </dt>
                  <dd className="film-details__description">
                    <span>
                      {film.budget ? formatCurrency(film.budget) : "Нет информации"}
                    </span>
                  </dd>
                </dl>
                <dl className="film-details">
                  <dt className="film-details__category">
                    <span>Выручка</span>
                  </dt>
                  <dd className="film-details__description">
                    <span>
                      {film.revenue ? formatCurrency(film.revenue) : "Нет информации"}
                    </span>
                  </dd>
                </dl>
                <dl className="film-details">
                  <dt className="film-details__category">
                    <span>Режиссёр</span>
                  </dt>
                  <dd className="film-details__description">
                    <span>
                      {film.director ? film.director : "Нет информации"}
                    </span>
                  </dd>
                </dl>
                <dl className="film-details">
                  <dt className="film-details__category">
                    <span>Продакшен</span>
                  </dt>
                  <dd className="film-details__description">
                    <span>
                      {film.production ? film.production : "Нет информации"}
                    </span>
                  </dd>
                </dl>
                <dl className="film-details">
                  <dt className="film-details__category">
                    <span>Награды</span>
                  </dt>
                  <dd className="film-details__description">
                    <span>
                      {film.awardsSummary ? film.awardsSummary : "Нет информации"}
                    </span>
                  </dd>
                </dl>
              </>
            )
          }
        </div>
      </section>
    </Layout>
  );
};

export default FilmPage;
