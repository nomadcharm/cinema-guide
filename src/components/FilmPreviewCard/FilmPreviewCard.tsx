import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { FilmPreview } from "../../models/FilmSchemas";
import { cardStub } from "../../assets/assets";
import "./FilmPreviewCard.scss";

const FilmPreviewCard: FC<FilmPreview> = ({ id, title, posterUrl }): ReactNode => {
  
  return (
    <article className="film-card">
      <Link className="film-card__link" to={`/movie/${id}`} >
        <img className="film-card__img" src={posterUrl ? posterUrl: cardStub} alt={title} width={224} height={336} />
        {
          !posterUrl && <p className="film-card__title">{title}</p>
        }
      </Link>
    </article>
  );
};

export default FilmPreviewCard;
