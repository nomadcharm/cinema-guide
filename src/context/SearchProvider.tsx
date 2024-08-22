import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { SearchContextProps } from "../models/ComponentProps";
import { fetchFilmsByTitle } from "../api/FilmsApi";
import { useDebounce } from "../hooks";
import { FilmList } from "../models/FilmSchemas";

export const SearchContext = createContext<SearchContextProps>({
  searchBarRef: null,
  handleMobileSearch: () => { },
  modalIsOpen: false,
  setModalIsOpen: () => { },
  inputValue: "",
  setInputValue: () => { },
  handleInput: () => { },
  searchResults: [],
});

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<FilmList>([]);
  const debouncedSearch = useDebounce(inputValue);

  const handleMobileSearch = () => {
    searchBarRef.current?.classList.toggle("open");
  };

  const handleInput = (value: string): void => {
    setModalIsOpen(true);
    setInputValue(value);
  };

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

  useEffect(() => {
    handleSearch(debouncedSearch);
  }, [debouncedSearch]);


  window.addEventListener("click", (e) => {
    const modal: HTMLElement | null = document.querySelector("#modal");
    const target = e.target;

    if (modal && target instanceof HTMLElement && !modal.contains(target)) {
      setModalIsOpen(false);
      setInputValue("");
    }
});

  const contextValue = {
    searchBarRef,
    handleMobileSearch,
    modalIsOpen,
    setModalIsOpen,
    inputValue,
    setInputValue,
    handleInput,
    searchResults,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;
