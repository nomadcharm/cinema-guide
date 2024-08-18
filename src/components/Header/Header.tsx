import { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import AuthContext from "../../context/AuthProvider";
import { SearchContext } from "../../context/SearchProvider";
import { useWindowWidth } from "../../hooks";
import { logo, menu, person, search } from "../../assets/assets";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

const Header: FC = (): ReactElement => {
  const { currentUser, getCurrentUser, handleAuthModalCall } = useContext(AuthContext);
  const { handleMobileSearch } = useContext(SearchContext);
  const windowWidth = useWindowWidth();
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMobileNav = (): void => {
    navRef.current?.classList.toggle("open");
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo" to={"/"} >
          <img src={logo} alt="Cinema Guide" width={240} />
        </Link>

        <nav className="header__nav nav" ref={navRef}>
          <ul className="nav__list">
            <li>
              <NavLink
                className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
                to={"/"}
                onClick={handleMobileNav}
              >Главная</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
                to={"/genres"}
                onClick={handleMobileNav}
              >Жанры</NavLink>
            </li>
          </ul>
        </nav>
        <button className="header__nav-btn" onClick={handleMobileNav} aria-label="Открыть меню">
          <ReactSVG src={menu} />
        </button>

        <SearchBar />
        <button className="search-bar__btn" onClick={handleMobileSearch} aria-label="Поиск">
          <ReactSVG src={search} />
        </button>

        {windowWidth < 768 ? (
          <button 
            className="login-btn login-btn__mobile" 
            onClick={currentUser ? () => navigate("/profile") : () => handleAuthModalCall()} 
            aria-label="Вход и регистрация"
          >
            <ReactSVG src={person} />
          </button>
        ) : (
          currentUser ? (
            <button className="login-btn__profile" onClick={() => navigate("/profile")}>
              {currentUser.surname}
            </button>
          ) : (
            <button className="login-btn" onClick={handleAuthModalCall}>
              Войти
            </button>
          )
        )}

      </div>
    </header >
  );
};

export default Header;
