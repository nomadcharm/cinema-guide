import { ReactNode, FC } from "react";
import "./FormField.scss";

interface FormFieldProps {
  children: ReactNode;
  errorMessage?: string;
}

export const FormField: FC<FormFieldProps> = ({ children, errorMessage }) => {
  return (
    <label className="form-field">
      {children}
      {errorMessage && (
        <span className="form-field__error">{errorMessage}</span>
      )}
    </label>
  );
};

export default FormField;
