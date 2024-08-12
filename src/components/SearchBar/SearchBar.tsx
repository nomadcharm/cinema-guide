import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { formatTime, setRatingColor } from "../../utils";
import { popcorn, searchClose } from "../../assets/assets";
import { useWindowWidth } from './../../hooks/useWindowWidth';
import { useSearch } from "../../hooks";
import "./SearchBar.scss";

const SearchBar = () => {
  const windowWidth = useWindowWidth();
  const { modalIsOpen, setModalIsOpen, inputValue, setInputValue, handleInput, searchResults } = useSearch();

  return (
    <div className={windowWidth <= 1024 ? "search-bar mobile" : "search-bar"} >
      <label className="search-bar__label">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Поиск"
          value={inputValue}
          onChange={(e) => handleInput(e.target.value)}
        />
        {
          windowWidth <= 1024 ? (
            <button className="search-bar__close-btn" onClick={() => console.log('close')}>
              <ReactSVG src={searchClose} />
            </button>
          ) : null
        }
      </label>

      <div className={modalIsOpen ? "search-bar__dropdown active" : "search-bar__dropdown"} id="modal">
        <ul className="search-bar__results-list">
          {searchResults && searchResults.length > 0 && (searchResults.map(result => {
            return <li className="search-bar__results-item" key={result.id}>
              <Link to={`/movie/${result.id}`} onClick={() => { setModalIsOpen(false), setInputValue("") }}>
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
            </li>
          }))
          }
        </ul>
      </div>

    </div>
  );
};

export default SearchBar;
