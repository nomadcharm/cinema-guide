import { FC, ReactElement, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { logo } from "../../assets/assets";
import "./Header.scss";
import AuthContext from "../../context/AuthProvider";
import AuthModal from "../AuthModal/AuthModal";
import { useAuthModal } from "../../hooks";

const Header: FC = (): ReactElement => {
  const { currentUser } = useContext(AuthContext);
  const [, isModalOpen, handleAuthModalCall] = useAuthModal();

  return (
    <>
      <AuthModal isOpen={isModalOpen} handleAuthFormCall={handleAuthModalCall} />

      <header className="header">
        <div className="container header__container">
          <Link className="header__logo" to={"/"} >
            <img src={logo} alt="Cinema Guide" width={240} />
          </Link>

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

          <SearchBar />

          {
            currentUser ?
              <Link className="login-btn__link--active" to={"/profile"}>
                {currentUser.surname}
              </Link> :

              <button
                className="login-btn"
                onClick={handleAuthModalCall}
              >Войти</button>
          }

        </div>
      </header >
    </>
  );
};

export default Header;
