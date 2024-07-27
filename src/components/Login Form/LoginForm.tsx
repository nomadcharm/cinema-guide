import { ReactSVG } from "react-svg";
import { email, key } from "../../assets/assets";
import FormField from "../FormField/FormField";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="login">
      <form className="login__form">
        <FormField>
          <ReactSVG className="input-icon" src={email} />
          <input type="text" placeholder="Электронная почта" />
        </FormField>
        <FormField >
          <ReactSVG className="input-icon" src={key} />
          <input type="text" placeholder="Пароль" />
        </FormField>
        <button className="button button-primary login__submit">Войти</button>
      </form>
    </div>
  )
}

export default LoginForm
