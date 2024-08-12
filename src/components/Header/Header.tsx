import { FC, ReactElement, useContext, useEffect, useRef } from "react";
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

  const navRef = useRef<HTMLDivElement>(null);

  const handleMobileNav = (): void => {
    navRef.current?.classList.toggle("open");
  }

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
        <button className="header__nav-btn" onClick={handleMobileNav}>
          <ReactSVG src={menu} />
        </button>

        {
          windowWidth >= 1024 ? (
            <SearchBar />
          ) : (
            <button className="search-bar__btn" onClick={() => console.log(1)}>
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
