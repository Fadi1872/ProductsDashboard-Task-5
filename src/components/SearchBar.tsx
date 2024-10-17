import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  placeholder: string;
  search: string;
  setSearch: (newSearch: string) => void;
}

const SearchBar = ({ placeholder, search, setSearch }: SearchBarProps) => {
  return (
    <div className="w-3/4 flex mx-auto px-4 bg-white border-2 border-slate-200 rounded-md items-center xl:py-2.5 md:py-1">
      <input
        type="text"
        placeholder={placeholder}
        className="grow border-0 outline-0"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IoSearchOutline className="opacity-50" />
    </div>
  );
};

export default SearchBar;
