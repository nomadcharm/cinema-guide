import { FC, ReactNode, useContext, useState } from "react";
import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { UserOnRegister, UserOnRegisterSchema } from "../../models/UserSchemas";
import { email, key, person } from "../../assets/assets";
import { queryClient } from "../../api/queryClient";
import { registerUser } from "../../api/UserApi";
import FormField from "../FormField/FormField";
import AuthContext from "../../context/AuthProvider";
import Button from "../Button/Button";
import "./RegistrationForm.scss";

const RegistrationForm: FC = (): ReactNode => {
  const [registrationComplete, setRegistrationComplete] = useState<boolean>(false);
  const { setAuthMode } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<UserOnRegister>({
    defaultValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(UserOnRegisterSchema)
  });

  const registrationMutation = useMutation({
    mutationFn: (data: UserOnRegister) => registerUser(data.email, data.name, data.surname, data.password),
    onSuccess() {
      setRegistrationComplete(true);
      reset();
    },
    onError(error: Error) {
      setError("root", { type: "server", message: error.message });

      if (error.name !== "AuthError") {
        setError("email", { type: "manual", message: error.message });
        setError("name", { type: "manual", message: error.message });
        setError("surname", { type: "manual", message: error.message });
        setError("password", { type: "manual", message: error.message });
        setError("confirmPassword", { type: "manual", message: error.message });
      }

      setRegistrationComplete(false);
    }
  }, queryClient);

  const onRegistration = (data: UserOnRegister) => {
    if (data.password !== data.confirmPassword) {
      setError("root", { type: "password", message: "Пароли не совпадают" });
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
            <button 
              className="button button-primary login__submit"
              type="button"
              onClick={() => setAuthMode("login")}
            >Войти</button>
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
                  autoFocus={true}
                  placeholder="Электронная почта"
                  onChange={() => clearErrors("email")}
                />
              </FormField>
              <FormField errorMessage={errors.name?.message}>
                <ReactSVG className="input-icon" src={person} />
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Имя"
                  onChange={() => clearErrors("name")}
                />
              </FormField>
              <FormField errorMessage={errors.surname?.message}>
                <ReactSVG className="input-icon" src={person} />
                <input
                  {...register("surname")}
                  type="text"
                  placeholder="Фамилия"
                  onChange={() => clearErrors("surname")}
                />
              </FormField>
              <FormField errorMessage={errors.password?.message}>
                <ReactSVG className="input-icon" src={key} />
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Пароль"
                  onChange={() => clearErrors("password")}
                />
              </FormField>
              <FormField errorMessage={errors.confirmPassword?.message}>
                <ReactSVG className="input-icon" src={key} />
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Подтвердить пароль"
                  onChange={() => clearErrors("confirmPassword")}
                />
              </FormField>

              {
                errors.root && <p className="error-message">{errors.root.message}</p>
              }

              <Button
                className="button button-primary registration__submit"
                isLoading={registrationMutation.isPending}
              >
                Создать аккаунт
              </Button>
            </form>
          </>
        )
      }
    </div >
  );
};

export default RegistrationForm;
