import { Type } from "../enums/Type";
import { InputProps } from "../interfaces/InputProps";

const Input = ({ type, placeholder, name, id, set, state }: InputProps) => {

  return (
    <input
      onChange={(e) =>
        set({
          ...state,
          [name]: e.target.value,
        })
      }
      value={type == Type.Number && state[name] == -1 ? "": state[name]}
      type={type}
      placeholder={placeholder}
      className="grow text-xs border-2 border-slate-200 rounded outline-0 focus:border-orange-450 border-2 transition duration-300
      md:p-2.5 xl:p-3.5"
      name={name}
      id={id}
    />
  );
};

export default Input;
