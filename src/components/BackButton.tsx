import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="/"
      className="w-10 aspect-square rounded-full border-2 border-slate-200 flex justify-center items-center xl:mb-20 md:mb-11"
    >
      <IoIosArrowBack className="text-lg" />
    </Link>
  );
};

export default BackButton;
