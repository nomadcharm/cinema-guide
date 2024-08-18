import { ReactSVG } from "react-svg";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { queryClient } from "../../api/queryClient";
import { UserOnLogin, UserOnLoginSchema } from "../../models/UserSchemas";
import { email, key } from "../../assets/assets";
import { loginUser } from "../../api/UserApi";
import FormField from "../FormField/FormField";
import AuthContext from "../../context/AuthProvider";
import "./LoginForm.scss";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { handleAuthModalCall } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<UserOnLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(UserOnLoginSchema)
  });

  const loginMutation = useMutation({
    mutationFn: (data: UserOnLogin) => loginUser(data.email, data.password),
    onSuccess() {
      navigate("/profile");
      handleAuthModalCall();
      reset();
    },
    onError(error: Error) {
      setErrorMessage(error.message);
    }
  }, queryClient);

  const handleInputChange = (fieldName: "email" | "password") => {
    setErrorMessage("");
    clearErrors(fieldName);
  };

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
            onChange={() => handleInputChange("email")}
          />
        </FormField>
        <FormField errorMessage={errors.password?.message}>
          <ReactSVG className="input-icon" src={key} />
          <input
            {...register("password")}
            type="password"
            placeholder="Пароль"
            onChange={() => handleInputChange("password")}
          />
        </FormField>

        {
          errorMessage && <p className="error-message">{errorMessage}</p>
        }

        <button className="button button-primary login__submit" type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
