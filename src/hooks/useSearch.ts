import { useState, useEffect } from "react";
import { fetchFilmsByTitle } from "../api/FilmsApi";
import { FilmList } from "../models/FilmSchemas";
import { useDebounce } from "./useDebounce";

export const useSearch = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedSearch = useDebounce(inputValue);
  const [searchResults, setSearchResults] = useState<FilmList>([]);

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

  return {modalIsOpen, setModalIsOpen, inputValue, setInputValue, handleInput, searchResults}
};
