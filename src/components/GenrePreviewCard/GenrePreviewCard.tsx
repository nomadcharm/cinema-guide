import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { pickGenrePoster } from "../../utils";
import { GenrePreviewCardProps } from "../../models/ComponentProps";
import "./GenrePreviewCard.scss";

const GenrePreviewCard: FC<GenrePreviewCardProps> = ({ genre }): ReactNode => {
  return (
    <article className="genre-card">
      <Link className="genre-card__link" to={`/movie?genre=${genre}`} >
        <img className="genre-card__img" src={pickGenrePoster(genre)} alt="" />
        <div className="genre-card__name">
          <p>{genre}</p>
        </div>
      </Link>
    </article>
  )
}

export default GenrePreviewCard;
