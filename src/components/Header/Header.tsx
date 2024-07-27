import { FC, ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo } from '../../assets/assets';
import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';



const Header: FC = (): ReactElement => {

  return (
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

        <button className="login-btn">Войти</button>

      </div>
    </header >
  )
}

export default Header;
