import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import FormField from "../FormField/FormField";
import { UserOnRegister, UserOnRegisterSchema } from "../../models/UserSchemas";
import { email, key, person } from "../../assets/assets";
import { queryClient } from "../../api/queryClient";
import { registerUser } from "../../api/UserApi";
import AuthContext from "../../context/AuthProvider";
import "./RegistrationForm.scss";

const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [registrationComplete, setRegistrationComplete] = useState<boolean>(false);
  const { setAuthMode } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserOnRegister>({
    resolver: zodResolver(UserOnRegisterSchema)
  });

  const registrationMutation = useMutation({
    mutationFn: (data: UserOnRegister) => registerUser(data.email, data.name, data.surname, data.password),
    onSuccess() {
      setRegistrationComplete(true);
      reset()
    },
    onError(error: Error) {
      setErrorMessage(error.message)
      setRegistrationComplete(false)
    }
  }, queryClient)

  const onRegistration = (data: UserOnRegister) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Пароли не совпадают");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...regData } = data;
    registrationMutation.mutate(regData);
  };

  return (
    <div className="registration">
      {
        registrationComplete ? (
          <div className="registration-complete">
            <h3 className="registration__title">Регистрация завершена</h3>
            <p className="registration__text">Используйте вашу электронную почту для входа</p>
            <button className="button button-primary login__submit" onClick={() => setAuthMode("login")}>Войти</button>
          </div>
        ) : (
          <>
            <h3 className="registration__title">Регистрация</h3>
            <form className="registration__form" onSubmit={handleSubmit(onRegistration)}>
              <FormField errorMessage={errors.email?.message}>
                <ReactSVG className="input-icon" src={email} />
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Электронная почта"
                  onInput={() => setErrorMessage("")}
                />
              </FormField>
              <FormField errorMessage={errors.name?.message}>
                <ReactSVG className="input-icon" src={person} />
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Имя"
                  onInput={() => setErrorMessage("")}
                />
              </FormField>
              <FormField errorMessage={errors.surname?.message}>
                <ReactSVG className="input-icon" src={person} />
                <input
                  {...register("surname")}
                  type="text"
                  placeholder="Фамилия"
                  onInput={() => setErrorMessage("")}
                />
              </FormField>
              <FormField errorMessage={errors.password?.message}>
                <ReactSVG className="input-icon" src={key} />
                <input
                  {...register("password")}
                  type="text"
                  placeholder="Пароль"
                  onInput={() => setErrorMessage("")}
                />
              </FormField>
              <FormField errorMessage={errors.confirmPassword?.message}>
                <ReactSVG className="input-icon" src={key} />
                <input
                  {...register("confirmPassword")}
                  type="text"
                  placeholder="Подтвердить пароль"
                  onInput={() => setErrorMessage("")}
                />
              </FormField>
              {
                errorMessage && <p className="error-message">{errorMessage}</p>
              }
              <button className="button button-primary registration__submit">Создать аккаунт</button>
            </form>
          </>
        )
      }
    </div >
  );
};

export default RegistrationForm;
