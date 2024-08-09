import { FC, ReactElement, useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import SearchBar from "../SearchBar/SearchBar";
import { logo, menu, person, search } from "../../assets/assets";
import "./Header.scss";
import { ReactSVG } from "react-svg";
import { useWindowWidth } from "../../hooks";

const Header: FC = (): ReactElement => {
  const { currentUser, getCurrentUser, handleAuthModalCall } = useContext(AuthContext);
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  console.log(isSearchOpen)

  const handleMobileSearch = (): void => setIsSearchOpen(prev => !prev);

  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__logo" to={"/"} >
          <img src={logo} alt="Cinema Guide" width={240} />
        </Link>

        {
          windowWidth >= 768 ? (
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li>
                  <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/"}>Главная</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/genres"}>Жанры</NavLink>
                </li>
              </ul>
            </nav>
          ) : (
            <button className="header__nav-btn">
              <ReactSVG src={menu} />
            </button>
          )
        }

        {
          windowWidth >= 1024 || isSearchOpen ? (
            <SearchBar />
          ) : (
            <button className="search-bar__btn" onClick={() => handleMobileSearch()}>
              <ReactSVG src={search} />
            </button>
          )
        }

        {windowWidth < 768 ? (
          <button className="login-btn login-btn__mobile" onClick={currentUser ? () => navigate("/profile") : () => handleAuthModalCall()}>
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
