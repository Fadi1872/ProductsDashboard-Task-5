import { NavLink, useNavigate } from "react-router-dom";
import { NavLinkData } from "../data/NavBarData";
import logoutIcon from "./../assets/sign-out.png";
import AuthService from "../Services/AuthService";

interface NavBarProps {
  logo: string;
  navLinks: Array<NavLinkData>;
}

const NavBar = ({ logo, navLinks }: NavBarProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "[{}]");

  return (
    <nav className="h-full px-9 flex flex-col xl:py-8 md:py-6">
      <img src={logo} alt="focal x logo" className="mx-auto xl:w-24 xl:mb-12 md:w-20 md:mb-9" />
      <img
        src={user?.profile_image_url || ""}
        alt="profile_image"
        className="aspect-square rounded-full object-cover mx-auto xl:w-36 md:w-24 w-36"
      />
      <p className="font-bold text-center xl:mt-6 md:mt-4">
        {user?.first_name} {user?.last_name}
      </p>
      <div className="grow flex flex-col xl:pt-24 xl:gap-y-3.5 md:pt-14 md:gap-y-3 ">
        {navLinks.map((element, index) => (
          <NavLink
            to={element.link}
            className={({isActive}) => `flex justify-center items-center py-2 transition-300 lg:gap-x-4 md:gap-x-3  ${(isActive) && "bg-orange-450"}`}
            
            key={index}
          >
            <img src={element.iconUrl} alt={element.text + " icon"} />
            <p>{element.text}</p>
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center cursor-pointer" onClick={() => {
        AuthService.logOut();
        navigate("/sign_in")
      }}>
        <p className="me-3">LogOut</p>
        <img src={logoutIcon} alt="logout" />
      </div>
    </nav>
  );
};

export default NavBar;
