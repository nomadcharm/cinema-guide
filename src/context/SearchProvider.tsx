import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { fetchFilmsByTitle } from "../api/FilmsApi";
import { useDebounce } from "../hooks";
import { FilmList } from "../models/FilmSchemas";

interface SearchContextProps {
  searchBarRef: React.RefObject<HTMLDivElement> | null,
  handleMobileSearch: () => void,
  modalIsOpen: boolean,
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  handleInput: (value: string) => void,
  searchResults: FilmList,
}

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

  const handleMobileSearch = () => {
    searchBarRef.current?.classList.toggle("open");
  };

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<FilmList>([]);
  const debouncedSearch = useDebounce(inputValue);

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

  const modal: HTMLElement | null = document.querySelector("#modal");

  window.addEventListener("click", (e) => {
    if (modal && !modal.contains(e.target as Node)) {
      setModalIsOpen(false);
    }
  });

  useEffect(() => {
    if (inputValue && modal) {
      modal.classList.add("active");
    }
  }, [inputValue, modal]);

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
