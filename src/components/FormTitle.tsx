interface FormTitleProps {
  title: string;
}

const FormTitle = ({ title }: FormTitleProps) => {
  return <h1 className="font-semibold xl:text-6xl md:text-4xl">{title}</h1>;
};

export default FormTitle;
