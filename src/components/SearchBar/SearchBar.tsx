import { ReactSVG } from "react-svg";
import { useContext } from "react";
import { searchClose } from "../../assets/assets";
import { useWindowWidth } from './../../hooks/useWindowWidth';
import { SearchContext } from "../../context/SearchProvider";
import SearchResultsCard from "../SearchResultsCard/SearchResultsCard";
import "./SearchBar.scss";

const SearchBar = () => {
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
            <button className="search-bar__close-btn" onClick={handleMobileSearch}>
              <ReactSVG src={searchClose} />
            </button>
          ) : null
        }
      </label>

      <div className={modalIsOpen ? "search-bar__dropdown active" : "search-bar__dropdown"} id="modal">
        <ul className="search-bar__results-list">
          {searchResults && searchResults.length > 0 && (searchResults.map(result => {
            return <li className="search-bar__results-item" key={result.id} onClick={() => { setModalIsOpen(false), setInputValue("") }}>
              <SearchResultsCard result={result} />
            </li>
          }))
          }
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
