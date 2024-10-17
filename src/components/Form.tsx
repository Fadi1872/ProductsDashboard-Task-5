import React from "react";
import { Link } from "react-router-dom";

interface FormProps {
  logo: string;
  title: string;
  subTitle: string;
  buttonText: string;
  question: string;
  linkText: string;
  linkTo: string;
  children: React.ReactNode;
  onSubmtion: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({
  logo,
  title,
  subTitle,
  buttonText,
  question,
  linkText,
  linkTo,
  onSubmtion,
  children,
}: FormProps) => {
  const handleSubmition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmtion(e);
  };

  return (
    <form
      onSubmit={(e) => handleSubmition(e)}
      className="w-100 bg-white rounded-2xl xl:px-8 xl:py-10 lg:px-7 md:p-5 md:pb-4"
    >
      <img src={logo} alt="companies logo" className="block mx-auto xl:w-40 xl:mb-11 lg:w-32 md:w-28 md:mb-6" />
      <p className="text-center font-semibold uppercase xl:text-2.5xl xl:mb-2 md:text-xl md:mb-1">
        {title}
      </p>
      <p className="text-sm text-slate-500 text-center xl:mb-6 md:mb-2">{subTitle}</p>
      <div className="flex flex-col xl:gap-y-2 md:gap-y-1">{children}</div>
      <button
        type="submit"
        className="block w-full text-sm text-white uppercase bg-orange-450 rounded transition duration-300 hover:bg-yellow-450 xl:p-3.5 md:p-2.5 xl:my-7 md:my-3"
      >
        {buttonText}
      </button>
      <p className="text-center text-sm text-slate-500">
        {question}{" "}
        <Link to={linkTo} className="underline text-orange-450">
          {linkText}
        </Link>
      </p>
    </form>
  );
};

export default Form;
