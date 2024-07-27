import { useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { logo } from "../../assets/assets";
import "./AuthModal.scss";

const AuthModal = () => {
  const [authMode, setAuthMode] = useState<string>("register");

  const handleClick = () => {
    setAuthMode((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="auth-modal">
      <div className="auth-modal__inner">
        <img src={logo} alt="Cinema Guide" width={180}/>
        {authMode === "register" ? <RegistrationForm /> : <LoginForm />}
        <button className="auth-modal__button" onClick={() => handleClick()}>
          {authMode === "register" ? "У меня есть пароль" : "Регистрация"}
          </button>
      </div>

    </div>
  );
};

export default AuthModal;
