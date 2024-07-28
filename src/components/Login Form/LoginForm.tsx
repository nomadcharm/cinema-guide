import { ReactSVG } from "react-svg";
import { email, key } from "../../assets/assets";
import FormField from "../FormField/FormField";
import "./LoginForm.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserOnLogin, UserOnLoginSchema } from "../../models/UserSchemas";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { loginUser } from "../../api/UserApi";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    // formState: {errors}
  } = useForm<UserOnLogin>({
    resolver: zodResolver(UserOnLoginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (data: UserOnLogin) => loginUser(data.email, data.password),
    async onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users", "current"] });
      navigate("/profile");
    },
  }, queryClient);

  const onSubmit = async (data: UserOnLogin): Promise<void> => {
    loginMutation.mutate(data);
    reset()
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <ReactSVG className="input-icon" src={email} />
          <input
            type="text"
            placeholder="Электронная почта"
            {...register("email")}
          />
        </FormField>
        <FormField >
          <ReactSVG className="input-icon" src={key} />
          <input
            type="text"
            placeholder="Пароль"
            {...register("password")}
          />
        </FormField>
        <button className="button button-primary login__submit">Войти</button>
      </form>
    </div>
  )
}

export default LoginForm;
