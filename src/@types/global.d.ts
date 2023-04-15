import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputFormProps {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}
