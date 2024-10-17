import { InputProps } from "../interfaces/InputProps";
import Input from "./Input";

interface LabeledInputProps {
  label: string;
  fInput: InputProps;
  sInput?: InputProps;
  error: string;
  bigLabel?: boolean;
  set: any;
  state: any;
}
const LabeledInput = ({
  label,
  fInput,
  sInput,
  error,
  bigLabel,
  set,
  state,
}: LabeledInputProps) => {
  return (
    <div>
      <label
        htmlFor={fInput.id}
        className={bigLabel ? "text-3xl opacity-75" : "text-sm"}
      >
        {label}
      </label>
      <div
        className={`flex gap-x-8 ${
          bigLabel ? "xl:mt-5 md:mt-4" : "xl:mt-2.5 md:mt-0.5"
        }`}
      >
        <Input
          type={fInput.type}
          name={fInput.name}
          placeholder={fInput.placeholder}
          id={fInput.id}
          set={set}
          state={state}
        />
        {sInput && (
          <Input
            type={sInput.type}
            name={sInput.name}
            placeholder={sInput.placeholder}
            id={sInput.id}
            set={set}
            state={state}
          />
        )}
      </div>
      <p className="text-xs text-slate-500 xl:mt-2.5 md:mt-0.5">{error}</p>
    </div>
  );
};

export default LabeledInput;
