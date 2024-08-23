import { FC, ReactElement } from "react";
import { ButtonProps } from "../../models/ComponentProps";
import Loader from "../Loaders/Loader/Loader";

const Button: FC<ButtonProps> = ({ isLoading, children, ...props }): ReactElement => {
  return (
    <button
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
