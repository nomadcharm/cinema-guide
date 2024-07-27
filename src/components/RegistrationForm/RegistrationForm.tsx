import { ReactSVG } from "react-svg";
import FormField from "../FormField/FormField";
import "./RegistrationForm.scss";
import { email, key, person } from "../../assets/assets";

const RegistrationForm = () => {
  return (
    <div className="registration">
      <h3 className="registration__title">Регистрация</h3>
      <form className="registration__form">
        <FormField>
          <ReactSVG className="input-icon" src={email} />
          <input type="text" placeholder="Электронная почта" />
        </FormField>
        <FormField >
          <ReactSVG className="input-icon" src={person} />
          <input type="text" placeholder="Имя" />
        </FormField>
        <FormField >
          <ReactSVG className="input-icon" src={person} />
          <input type="text" placeholder="Фамилия" />
        </FormField>
        <FormField >
          <ReactSVG className="input-icon" src={key} />
          <input type="text" placeholder="Пароль" />
        </FormField>
        <FormField >
          <ReactSVG className="input-icon" src={key} />
          <input type="text" placeholder="Подтвердить пароль" />
        </FormField>
        <button className="button button-primary registration__submit">Создать аккаунт</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
