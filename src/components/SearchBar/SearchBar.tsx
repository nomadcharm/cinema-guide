import { Link } from 'react-router-dom';
import { formatTime, setRatingColor } from '../../utils';
import './SearchBar.scss';
import { fetchFilmsByTitle } from '../../api/FilmsApi';
import { useEffect, useState } from 'react';
import { FilmList } from '../../models/FilmSchemas';
import { useDebounce } from '../../hooks';
import { popcorn } from '../../assets/assets';

const SearchBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<FilmList>([]);
  const debouncedSearch = useDebounce(inputValue);

  const handleSearch = async (searchItem: string): Promise<void> => {
    return await fetchFilmsByTitle(searchItem)
      .then((filmList) => {
        const filmsFound = filmList.filter(film => {
          return searchItem &&
            film &&
            film.title.toLowerCase().trim().includes(searchItem.toLowerCase().trim());
        });

        setSearchResults(filmsFound);
      });
  };

  const handleInput = (value: string): void => {
    setModalIsOpen(true);
    setInputValue(value);
  };

  useEffect(() => {
    handleSearch(debouncedSearch);
  }, [debouncedSearch])

  const modal: HTMLElement | null = document.querySelector('#modal')

  window.addEventListener('click', (e) => {
    if (modal && !modal.contains(e.target as Node)) {
      setModalIsOpen(false)
    }
  })

  useEffect(() => {
    if (inputValue && modal) {
      modal.classList.add('active');
    }
  }, [inputValue, modal]);

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Поиск"
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
      />

      <div className={modalIsOpen ? "search-bar__dropdown active" : "search-bar__dropdown"} id="modal">
        <ul className="search-bar__results-list">
          {searchResults && searchResults.map(result => {
            return <li className="search-bar__results-item" key={result.id} >
              <Link to={`/movie/${result.id}`} onClick={() => { setModalIsOpen(false), setInputValue('') }}>
                <article className="search-card">
                  <img src={result.posterUrl ? result.posterUrl : popcorn} alt={result.title} width={40} height={52} />
                  <div className="search-card__content">
                    <div className="search-card__info">
                      <p className={setRatingColor(result.tmdbRating)}>{result.tmdbRating.toFixed(1)}</p>
                      <p className="search-card__release-year">{result.releaseYear}</p>
                      <p className="search-card__genre">{result.genres[0]}</p>
                      <p className="search-card__runtime">{formatTime(result.runtime)}</p>
                    </div>
                    <p className="search-card__title">
                      {result.title}
                    </p>
                  </div>
                </article>
              </Link>
            </li>
          }).slice(0, 5)
          }
        </ul>
      </div>

    </div>
  )
}

export default SearchBar
