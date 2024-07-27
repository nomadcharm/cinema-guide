import { useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../Login Form/LoginForm";
import { close, logo } from "../../assets/assets";
import "./AuthModal.scss";
import { ReactSVG } from "react-svg";

const AuthModal = () => {
  const [authMode, setAuthMode] = useState<string>("register");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleAuthModalCall = () => {
    setIsModalOpen((prevState) =>
      prevState = !prevState
    )
  }

  const handleClick = () => {
    setAuthMode((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className={isModalOpen ? "auth-modal is-open" : "auth-modal"}>
      <div className="auth-modal__inner">
        <button className="auth-modal__close" onClick={() => handleAuthModalCall()}>
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
