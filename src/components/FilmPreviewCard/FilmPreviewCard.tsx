import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { FilmPreview } from "../../models/FilmSchemas";
import { cardStub } from "../../assets/assets";
import "./FilmPreviewCard.scss";

const FilmPreviewCard: FC<FilmPreview> = ({ id, title, posterUrl }): ReactElement => {

  return (
    <article className="film-card">
      <Link className="film-card__link" to={`/movie/${id}`} >
        <img className="film-card__img" src={posterUrl ? posterUrl: cardStub} alt={title} loading="lazy" width={224} height={336} />
      </Link>
    </article>
  );
};

export default FilmPreviewCard;
