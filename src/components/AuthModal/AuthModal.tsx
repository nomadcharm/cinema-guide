import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { close, logo } from "../../assets/assets";
import "./AuthModal.scss";
import { ReactSVG } from "react-svg";
import { useAuthModal } from "../../hooks";
import { FC } from "react";

interface AuthModalProps {
  isOpen: boolean;
  handleAuthFormCall: () => void;
}

const AuthModal: FC<AuthModalProps> = ({isOpen, handleAuthFormCall}) => {
  const [authMode, , , handleClick] = useAuthModal();

  return (
    <div className={isOpen ? "auth-modal is-open" : "auth-modal"}
      onClick={(e) => {
        if ((e.target as HTMLElement).className === "auth-modal is-open") {
          handleAuthFormCall();
        }
      }}>
      <div className="auth-modal__inner">
        <button className="auth-modal__close"
          onClick={() => handleAuthFormCall()}
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