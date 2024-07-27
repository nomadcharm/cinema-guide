import { FC, ReactElement } from 'react';
import { ok, telegram, vk, youtube } from '../../assets/assets';
import './Footer.scss';

const Footer: FC = (): ReactElement => {

  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__sub">
          <span className="footer__sub--company">LLC «Мультимедиа Визион»</span>
          <span className="footer__sub--copy">Все права защищены</span>
        </p>
        <ul className="socials">
          <li className="socials__icon">
            <a href="https://vk.com/nomadcharm" target="blank">
              <img className="socials__img" src={vk} alt="Наша страница Вконтакте" width={36} height={36}/>
            </a>
          </li>
          <li className="socials__icon">
            <a href="https://www.youtube.com/" target="blank">
              <img className="socials__img" src={youtube} alt="Наш YouTube канал" width={36} height={36}/>
            </a>
          </li>
          <li className="socials__icon">
            <a href="https://ok.ru/" target="blank">
              <img className="socials__img" src={ok} alt="Наша страница в сетиОдноклассники" width={36} height={36}/>
            </a>
          </li>
          <li className="socials__icon">
            <a href="https://t.me/nomadcharm" target="blank">
              <img className="socials__img" src={telegram} alt="Наш Телеграм канал" width={36} height={36}/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
