import { ChangeEvent, useRef, useState } from "react";
import { LabeledFileInputProps } from "../interfaces/LabeledFileInputProps";
import icon from "./../assets/Upload_icon.png";

const LabeledFileInput = ({
  label,
  name,
  id,
  error,
  bigLabel,
  set,
  state
}: LabeledFileInputProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(
    (state[name] as File) || null
  );
  const handleFileSelection = () => {
    input.current?.click();
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      set({
        ...state,
        [name]: file
      })
    }
  };

  return (
    <div className={bigLabel ? "flex flex-col h-full" : ""}>
      <label
        htmlFor={id}
        className={bigLabel ? "text-3xl opacity-75" : "text-sm"}
      >
        {label}
      </label>
      <div
        className={`bg-slate-100 rounded border-dashed border-2 border-slate-300 cursor-pointer flex items-center justify-center relative overflow-hidden ${
          bigLabel
            ? "grow xl:mt-5 md:mt-4"
            : "aspect-square xl:w-24 md:w-16 xl:mt-2.5 md:mt-0.5"
        }`}
        onClick={handleFileSelection}
      >
        <img src={icon} alt="upload" className={bigLabel ? "w-20" : ""} />
        <input
          onChange={(e) => handleChange(e)}
          ref={input}
          type="file"
          id={id}
          name={name}
          accept="image/*"
          className="hidden"
        />
        {image && (
          <img
            src={typeof image == "string" ? image : URL.createObjectURL(image)}
            alt="img selected"
            className="absolute w-full h-full object-contain"
          />
        )}
      </div>
      <p className="text-xs text-slate-500 xl:mt-2.5 lg:mt-2 md:mt-1.5">
        {error}
      </p>
    </div>
  );
};

export default LabeledFileInput;
