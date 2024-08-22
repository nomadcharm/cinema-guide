import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { SearchResultsCardProps } from "../../models/ComponentProps";
import { setRatingColor, formatTime } from "../../utils";
import { popcorn } from "../../assets/assets";
import "./SearchResultsCard.scss";

const SearchResultsCard: FC<SearchResultsCardProps> = ({ result }): ReactNode => {

  return (
    <Link to={`/movie/${result.id}`}>
      <article className="search-card">
        <img src={result.posterUrl ? result.posterUrl : popcorn} alt={result.title} width={40} height={52} />
        <div className="search-card__content">
          <div className="search-card__info">
            <p className={setRatingColor(result.tmdbRating)}>{result.tmdbRating.toFixed(1)}</p>
            <p className="search-card__release-year">{result.releaseYear}</p>
            <p className="search-card__genre">{result.genres[0]}{result.genres.length > 1 && ','} {result.genres[1]}</p>
            <p className="search-card__runtime">{formatTime(result.runtime)}</p>
          </div>
          <p className="search-card__title">
            {result.title}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default SearchResultsCard;
