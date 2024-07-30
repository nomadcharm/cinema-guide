import { ReactSVG } from "react-svg";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "../../api/queryClient";
import { UserOnLogin, UserOnLoginSchema } from "../../models/UserSchemas";
import FormField from "../FormField/FormField";
import { email, key } from "../../assets/assets";
import { loginUser } from "../../api/UserApi";
import { useState } from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<UserOnLogin>({
    resolver: zodResolver(UserOnLoginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (data: UserOnLogin) => loginUser(data.email, data.password),
    onSuccess() {
      // queryClient.invalidateQueries({ queryKey: ["users", "current"] });
      navigate("/profile");
      reset()
    },
    onError(error: Error) {
      setErrorMessage(error.message)
    }
  }, queryClient);

  const onSubmit = async (data: UserOnLogin): Promise<void> => {
    loginMutation.mutate(data);
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <FormField errorMessage={errors.email?.message}>
          <ReactSVG className="input-icon" src={email} />
          <input
            {...register("email")}
            type="text"
            placeholder="Электронная почта"
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
        {
          errorMessage && <p className="error-message">{errorMessage}</p>
        }
        <button className="button button-primary login__submit">Войти</button>
      </form>
    </div>
  )
}

export default LoginForm;
