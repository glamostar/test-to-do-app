import { useState } from "react";
import { FormType } from "types";

const useForm = (initialState: FormType) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.value
    });
  }
  const clear = () => {
    setForm({ ...initialState })
  }
  return {
    form, setForm, handleChange, clear
  }
}
export default useForm;