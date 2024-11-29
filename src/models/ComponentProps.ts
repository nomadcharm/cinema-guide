import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { Film, FilmList } from "./FilmSchemas";
import { UserOnAuth } from "./UserSchemas";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: string | ReactElement,
}

interface AuthContextProps {
  authMode: string,
  setAuthMode: React.Dispatch<React.SetStateAction<string>>,
  currentUser: UserOnAuth | null;
  getCurrentUser: () => void;
  clearCurrentUser: () => void;
  handleAuthModalCall: () => void;
  handleClick: () => void;
}

interface AuthModalProps {
  isOpen: boolean;
}

interface AuthProviderProps {
  children: ReactNode,
}

interface FilmBannerProps {
  film: Film | null,
  filmPage: boolean,
  handleRefresh?: () => Promise<void>,
}

interface FormFieldProps {
  children: ReactNode;
  errorMessage?: string;
}

interface GenrePreviewCardProps {
  genre: string;
}

interface LayoutProps {
  children: ReactNode
}

interface SearchResultsCardProps {
  result: Film,
}

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

interface TrailerModalProps {
  film: Film,
  active: boolean;
  handleModalCall: () => void;
}

export { 
  type AuthContextProps,
  type AuthModalProps,
  type AuthProviderProps,
  type ButtonProps,
  type FilmBannerProps,
  type FormFieldProps,
  type GenrePreviewCardProps,
  type LayoutProps,
  type SearchResultsCardProps,
  type SearchContextProps,
  type TrailerModalProps,
}