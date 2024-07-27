import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FilmPreview } from '../../models/FilmSchemas';
import { cardStub } from '../../assets/assets';
import './FilmPreviewCard.scss';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

const FilmPreviewCard: FC<FilmPreview> = ({ id, title, posterUrl }): ReactElement => {

  return (
    <article className="film-card">
      <Link className="film-card__link" to={`/movie/${id}`} >
        {/* <LazyLoadImage src={posterUrl ? posterUrl: cardStub} alt={title} width={224} effect="blur"/> */}
        <img className="film-card__img" src={posterUrl ? posterUrl: cardStub} alt={title} loading="lazy" width={224} height={336} />
      </Link>
    </article>
  );
};

export default FilmPreviewCard;
