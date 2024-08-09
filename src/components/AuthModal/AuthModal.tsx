import { FC, lazy, Suspense, useContext } from "react";
import { ReactSVG } from "react-svg";
// import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import { close, logo } from "../../assets/assets";
import AuthContext from "../../context/AuthProvider";
import "./AuthModal.scss";
import MainLoader from "../Loaders/MainLoader/MainLoader";

interface AuthModalProps {
  isOpen: boolean;
}

const RegistrationForm = lazy(() => import("../RegistrationForm/RegistrationForm"));

const AuthModal: FC<AuthModalProps> = ({ isOpen }) => {
  const { authMode, handleAuthModalCall, handleClick } = useContext(AuthContext);

  return (
    <div className={isOpen ? "auth-modal is-open" : "auth-modal"}
      onClick={(e) => {
        if ((e.target as HTMLElement).className === "auth-modal is-open") {
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
        {
          authMode === "register"
            ? <Suspense fallback={<MainLoader />}>
              <RegistrationForm />
            </Suspense>
            : <LoginForm
            />
        }
        <button className="auth-modal__button" onClick={() => handleClick()}>
          {authMode === "register" ? "У меня есть пароль" : "Регистрация"}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
