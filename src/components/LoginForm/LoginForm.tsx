import { ReactSVG } from "react-svg";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { queryClient } from "../../api/queryClient";
import { UserOnLogin, UserOnLoginSchema } from "../../models/UserSchemas";
import { email, key } from "../../assets/assets";
import { loginUser } from "../../api/UserApi";
import FormField from "../FormField/FormField";
import AuthContext from "../../context/AuthProvider";
import "./LoginForm.scss";

const LoginForm = () => {
  const { handleAuthModalCall } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
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
      setError("root", { type: "server", message: error.message });

      if (error.name !== "AuthError") {
        setError("email" || "password", { type: "manual", message: error.message });
      }
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
            onChange={() => clearErrors("email")}
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

        {
          errors.root && <p className="error-message">{errors.root?.message}</p>
        }

        <button className="button button-primary login__submit" type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
