import { ReactNode, FC } from "react";
import { FormFieldProps } from "../../models/ComponentProps";
import "./FormField.scss";

export const FormField: FC<FormFieldProps> = ({ children, errorMessage }): ReactNode => {

  return (
    <label className="form-field">
      {children}
      {errorMessage && <span className="form-field__error">{errorMessage}</span>}
    </label>
  );
};

export default FormField;
