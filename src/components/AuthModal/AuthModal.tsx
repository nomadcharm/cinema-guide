import { FC, ReactNode, lazy, useContext } from "react";
import { ReactSVG } from "react-svg";
import { AuthModalProps } from "../../models/ComponentProps";
import { close, logo } from "../../assets/assets";
import LoginForm from "../LoginForm/LoginForm";
import AuthContext from "../../context/AuthProvider";
import "./AuthModal.scss";

const RegistrationForm = lazy(() => import("../RegistrationForm/RegistrationForm"));

const AuthModal: FC<AuthModalProps> = ({ isOpen }): ReactNode => {
  const { authMode, handleAuthModalCall, handleClick } = useContext(AuthContext);

  return (
    <div className={isOpen ? "auth-modal is-open" : "auth-modal"}
      onClick={(e) => {
        const target: EventTarget = e.target;
        if (target instanceof HTMLElement && target.className === "auth-modal is-open") {
          handleAuthModalCall();
        }
      }}>
      <div className="auth-modal__inner">
        <button
          className="auth-modal__close"
          onClick={() => handleAuthModalCall()}
          aria-label="Закрыть окно"
        >
          <ReactSVG src={close} />
        </button>
        <img className="auth-modal__logo" src={logo} alt="Cinema Guide" width={180} />
        {authMode === "register" ? <RegistrationForm /> : <LoginForm />}
        <button className="auth-modal__button" onClick={() => handleClick()}>
          {authMode === "register" ? "У меня есть пароль" : "Регистрация"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
