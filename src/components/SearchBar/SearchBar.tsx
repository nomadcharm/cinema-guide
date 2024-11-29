import { FC, lazy, ReactNode, Suspense, useContext, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { searchClose } from "../../assets/assets";
import { useWindowWidth } from './../../hooks/useWindowWidth';
import { SearchContext } from "../../context/SearchProvider";
import Preloader from "../Loaders/Preloader/Preloader";
import "./SearchBar.scss";
import { useDebounce } from "../../hooks";

const SearchResultsCard = lazy(() => import("../SearchResultsCard/SearchResultsCard"))

const SearchBar: FC = (): ReactNode => {
  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);
  
  const windowWidth = useWindowWidth();
  const {
    searchBarRef,
    handleMobileSearch,
    modalIsOpen,
    setModalIsOpen,
    inputValue,
    setInputValue,
    handleInput,
    searchResults,
  } = useContext(SearchContext);

  const debouncedInputValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    if (searchResults.length === 0 && debouncedInputValue.length > 5) {
      setShowNotFoundMessage(true);
    } else {
      setShowNotFoundMessage(false);
    }
  }, [searchResults, debouncedInputValue]);

  return (
    <div className="search-bar" ref={searchBarRef}>
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
            <button className="search-bar__close-btn" onClick={handleMobileSearch} aria-label="Закрыть поиск">
              <ReactSVG src={searchClose} />
            </button>
          ) : null
        }
      </label>

      <div className={modalIsOpen ? "search-bar__dropdown active" : "search-bar__dropdown"} id="modal">
        <ul className="search-bar__results-list">
          {searchResults && searchResults.length > 0 && (searchResults.map(result => {
            return <li className="search-bar__results-item" key={result.id} onClick={() => { setModalIsOpen(false), setInputValue("") }}>
              <Suspense fallback={<Preloader />}>
                <SearchResultsCard result={result} />
              </Suspense>
            </li>
          }))
          }
          {
            showNotFoundMessage && <li className="search-bar__results-item">Фильм с таким названием не найден</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
