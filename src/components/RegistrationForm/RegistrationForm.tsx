import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { UserOnRegister, UserOnRegisterSchema } from "../../models/UserSchemas";
import { email, eye, eyeSlash, key, person } from "../../assets/assets";
import { queryClient } from "../../api/queryClient";
import { registerUser } from "../../api/UserApi";
import { useShowPassword } from "../../hooks";
import FormField from "../FormField/FormField";
import AuthContext from "../../context/AuthProvider";
import "./RegistrationForm.scss";

const RegistrationForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [registrationComplete, setRegistrationComplete] = useState<boolean>(false);
  const { setAuthMode } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
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

  const [isPasswordShown, handleShowPassword] = useShowPassword();
  const [isConfirmPasswordShown, handleShowConfirmPassword] = useShowPassword();

  const handleInputChange = (fieldName: "email" | "name" | "surname" | "password" | "confirmPassword") => {
    setErrorMessage("");
    clearErrors(fieldName);
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
                  onChange={() => handleInputChange("email")}
                />
              </FormField>
              <FormField errorMessage={errors.name?.message}>
                <ReactSVG className="input-icon" src={person} />
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Имя"
                  onChange={() => handleInputChange("name")}
                />
              </FormField>
              <FormField errorMessage={errors.surname?.message}>
                <ReactSVG className="input-icon" src={person} />
                <input
                  {...register("surname")}
                  type="text"
                  placeholder="Фамилия"
                  onChange={() => handleInputChange("surname")}
                />
              </FormField>
              <FormField errorMessage={errors.password?.message}>
                <ReactSVG className="input-icon" src={key} />
                <input
                  {...register("password")}
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Пароль"
                  onChange={() => handleInputChange("password")}
                />
                <button className="registration__show-password" type="button" onClick={() => handleShowPassword()}>
                  <ReactSVG className="password-icon" src={isPasswordShown ? eyeSlash : eye} />
                </button>
              </FormField>
              <FormField errorMessage={errors.confirmPassword?.message}>
                <ReactSVG className="input-icon" src={key} />
                <input
                  {...register("confirmPassword")}
                  type={isConfirmPasswordShown ? "text" : "password"}
                  placeholder="Подтвердить пароль"
                  onChange={() => handleInputChange("confirmPassword")}
                />
                <button className="registration__show-password" type="button" onClick={() => handleShowConfirmPassword()}>
                  <ReactSVG className="password-icon" src={isConfirmPasswordShown ? eyeSlash : eye} />
                </button>
              </FormField>

              {
                errorMessage && <p className="error-message">{errorMessage}</p>
              }
              
              <button className="button button-primary registration__submit" type="submit">Создать аккаунт</button>
            </form>
          </>
        )
      }
    </div >
  );
};

export default RegistrationForm;
